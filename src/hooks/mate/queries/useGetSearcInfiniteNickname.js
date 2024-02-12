import { getSearchNickname } from '@/apis/request/mate';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGetSearchInfiniteNickname = (searchTerm, take) => {
  return useInfiniteQuery({
    queryKey: ['searchNickname', { searchTerm }],
    queryFn: ({ pageParam = 0 }) =>
      getSearchNickname(searchTerm, take, { pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const meta = lastPage?.data?.data?.meta;
      if (meta && meta.hasNextData) {
        return meta.cursor;
      } else {
        return null;
      }
    },
    staleTime: 60 * 1000,
  });
};

export { useGetSearchInfiniteNickname };
