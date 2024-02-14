import { getNotification } from '@/apis/request/notification';
import { useQuery } from '@tanstack/react-query';

const useGetNotification = () => {
  return useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotification(),
    staleTime: 0,
  });
};

export { useGetNotification };
