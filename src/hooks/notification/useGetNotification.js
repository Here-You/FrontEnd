import {
  getNotification,
  getUnReadNotification,
} from '@/apis/request/notification';
import { useQuery } from '@tanstack/react-query';

const useGetNotification = () => {
  return useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotification(),
    staleTime: 300,
  });
};

const useUnReadNotification = () => {
  return useQuery({
    queryKey: ['unReadNotification'],
    queryFn: () => getUnReadNotification(),
    staleTime: 0,
  });
};

export { useGetNotification, useUnReadNotification };
