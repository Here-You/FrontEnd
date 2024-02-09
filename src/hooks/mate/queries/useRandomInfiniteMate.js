import { getExploreMate } from '@/apis/request/mate';
import { useInfiniteQuery } from '@tanstack/react-query';

const useRandomInfiniteMate = () => {
  return useInfiniteQuery({
    queryKey: ['exploreRandom'],
    queryFn: ({ pageParam = 0 }) => getExploreMate(1, { pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const { hasNextData, cursor } = lastPage.data.data.meta;
      if (hasNextData) {
        return cursor;
      } else {
        return null;
      }
    },
  });
};

export { useRandomInfiniteMate };
