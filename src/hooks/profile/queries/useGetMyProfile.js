import { getProfileInfo } from '@/apis/request/profile';
import { useQuery } from '@tanstack/react-query';

const useGetMyProfile = () => {
  return useQuery({
    queryKey: ['myProfile'],
    queryFn: () => getProfileInfo(),
    staleTime: 3000,
  });
};

export { useGetMyProfile };
