import { useInView } from 'react-intersection-observer';

import * as S from './MateLook.style';
import { getExploreMate } from '@/apis/request/mate';
import Banner from '@/components/mate/Banner';
import MateSignatureSection from '@/components/mate/MateSignatureSection';
import { useInfiniteQuery } from '@tanstack/react-query';

const MateLookPage = () => {
  const userId = 1;
  const limit = 10;

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['exploreMate', userId],
    queryFn: ({ pageParam = 1 }) => getExploreMate(userId, pageParam, limit),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  });

  const mate = data?.pages[0].data.data.recommend_mates;

  // const { ref, inView, entry } = useInView({
  // //   delay: 0,
  //   threshold: 0,
  // });

  // useEffect(() => {
  //   if (inView && !isFetchingNextPage && hasNextPage) {
  //     alert('trigger');
  //   }
  // }, [inView, isFetchingNextPage, hasNextPage, fetchNextPage]);

  return (
    <S.MateLookContainer>
      <Banner />
      <S.CenteredContainer>
        <MateSignatureSection data={mate} />
        {/* <div ref={ref} style={{ height: 50 }}></div> */}
      </S.CenteredContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
