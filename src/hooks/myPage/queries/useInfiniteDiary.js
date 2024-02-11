import { getMyDiary } from '@/apis/request/profile';
import { useInfiniteQuery } from '@tanstack/react-query';

const useInfiniteDiaryList = () => {
  return useInfiniteQuery({
    queryKey: ['diary'],
    queryFn: ({ pageParam = 0 }) => getMyDiary({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPage?.data?.data?.diaries?.at(-1)?.id;
    },
  });
};

export { useInfiniteDiaryList };
