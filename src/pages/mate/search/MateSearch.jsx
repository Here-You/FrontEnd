import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './MateSearch.style';
import { getSearchMate } from '@/apis/request/mate';
import Profile from '@/components/mate/Profile';
import { useInfiniteQuery } from '@tanstack/react-query';

const MateSearchPage = ({ searchTerm }) => {
  const {
    data: mateSearch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ['mateSearch'],
    queryFn: ({ pageParam = 1 }) => getSearchMate(searchTerm, pageParam, 1),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage?.data?.data?.data?.mates.at(-1)._id,
    staleTime: 60 * 1000,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {mateSearch?.pages.map(data =>
        data?.data?.data?.mates?.map(data => (
          <Profile key={data._id} profileData={data} />
        )),
      )}

      {mateSearch?.pages?.length === 0 && (
        <S.NoResult>
          <span>해당 이름의 메이트가 존재하지 않아요</span>
        </S.NoResult>
      )}
    </div>
  );
};

export default MateSearchPage;
