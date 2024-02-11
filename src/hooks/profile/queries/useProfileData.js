import { getMateProfile } from '@/apis/request/mate';
import { useQuery } from '@tanstack/react-query';

const useProfileData = userId => {
  return useQuery({
    queryKey: ['profile', { userId }],
    queryFn: () => getMateProfile(userId),
    staleTime: 3000,
  });
};

export { useProfileData };
