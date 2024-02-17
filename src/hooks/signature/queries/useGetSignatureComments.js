import { getSignatureComments } from '@/apis/request/signature';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGetSignatureComments = (signatureId, take) => {
  return useInfiniteQuery({
    queryKey: ['signaturesComments', { signatureId }],
    queryFn: ({ pageParam = 0 }) =>
      getSignatureComments(signatureId, take, { pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const meta = lastPage?.data?.data?.meta;
      if (meta?.hasNextData) {
        return meta?.cursor;
      } else {
        return null;
      }
    },
    staleTime: 60 * 1000,
  });
};

export { useGetSignatureComments };
