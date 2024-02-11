import { getMateInfiniteSignatureList } from '@/apis/request/mate';
import { useInfiniteQuery } from '@tanstack/react-query';

const useInfiniteSignatureList = mateId => {
  return useInfiniteQuery({
    queryKey: ['signatures'],
    queryFn: ({ pageParam = 0 }) =>
      getMateInfiniteSignatureList(mateId, 4, { pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const meta = lastPage?.data?.data?.meta;
      if (meta && meta.hasNextData) {
        return meta.cursor;
      } else {
        return null;
      }
    },
  });
};

export { useInfiniteSignatureList };
