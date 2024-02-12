import { getTeamMateRuleComment } from '@/apis/request/mate';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGetComments = ruleId => {
  return useInfiniteQuery({
    queryKey: ['comments', { ruleId }],
    queryFn: ({ pageParam = 0 }) =>
      getTeamMateRuleComment(ruleId, 50, { pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      //   const { hasNextData, cursor } = lastPage.data.data.meta;
      //   if (hasNextData) {
      //     return cursor;
      //   } else {
      //     return null;
      //   }
    },
    staleTime: 60 * 1000,
  });
};

export { useGetComments };
