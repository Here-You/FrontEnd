import {
  getExploreMainHotPost,
  getExploreMainNewPost,
} from '@/apis/request/search';
import { useQuery } from '@tanstack/react-query';

const useGetHotSignature = () => {
  return useQuery({
    queryKey: ['SignatureHotPost'],
    queryFn: () => getExploreMainHotPost(),
    staleTime: 3000,
  });
};

const useGetNewSignature = () => {
  return useQuery({
    queryKey: ['SignatureNewPost'],
    queryFn: () => getExploreMainNewPost(),
    staleTime: 3000,
  });
};

export { useGetHotSignature, useGetNewSignature };
