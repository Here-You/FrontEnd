import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './MateCommentList.style';
import MateCommentView from './commentView/MateCommentView';
import { getTeamMateRuleComment } from '@/apis/request/mate';
import { useInfiniteQuery } from '@tanstack/react-query';

const MateCommentList = ({ ruleId }) => {
  const take = 10;

  const {
    data: commentList,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ['mateComments', ruleId],
    queryFn: ({ pageParam = 1 }) =>
      getTeamMateRuleComment(ruleId, pageParam, take),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage?.data?.data[0]?.cursor + 1,

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
    <>
      {commentList?.pages?.length > 0 ? (
        <S.Container>
          {commentList?.pages?.map(page =>
            page?.data?.data[0]?.comments.map(data => (
              <MateCommentView key={data.id} commentData={data} />
            )),
          )}
          <div ref={ref} style={{ height: 10 }}></div>
        </S.Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default MateCommentList;
