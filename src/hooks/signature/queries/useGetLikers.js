import { getLikeList } from '@/apis/request/signature';
import { useQuery } from '@tanstack/react-query';

const useGetLikers = signatureId => {
  return useQuery({
    queryKey: ['likers', { signatureId }],
    queryFn: () => getLikeList(signatureId),
    staleTime: 3000,
  });
};

export { useGetLikers };
