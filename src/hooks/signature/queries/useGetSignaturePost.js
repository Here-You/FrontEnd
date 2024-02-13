import { getDetail } from '@/apis/request/signature';
import { useQuery } from '@tanstack/react-query';

const useGetSignaturePost = signatureId => {
  return useQuery({
    queryKey: ['signaturePost', { signatureId }],
    queryFn: () => getDetail(signatureId),
    staleTime: 3000,
  });
};

export { useGetSignaturePost };
