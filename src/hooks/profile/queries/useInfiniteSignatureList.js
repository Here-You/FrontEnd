import { getMateInfiniteSignatureList } from '@/apis/request/mate';
import { useInfiniteQuery } from '@tanstack/react-query';

const useInfiniteSignatureList = mateId => {
  return useInfiniteQuery({
    queryKey: ['signatures'],
    queryFn: ({ pageParam = 0 }) =>
      getMateInfiniteSignatureList(mateId, 4, { pageParam }),
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

export { useInfiniteSignatureList };
