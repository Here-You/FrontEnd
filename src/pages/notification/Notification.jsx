import * as S from './Notification.style';
import NotificationPage from '@/components/notification/NotificationPage';
import NotificationSkeleton from '@/components/notification/skeleton/NotificationSkeleton';
import { useGetNotification } from '@/hooks/notification/useGetNotification';

const Notification = () => {
  const { data, isPending, isError } = useGetNotification();
  const notification = data?.data?.data;
  console.log(notification);
  return (
    <S.Container>
      {isPending ? (
        <NotificationSkeleton />
      ) : (
        <NotificationPage notification={notification} />
      )}
    </S.Container>
  );
};

export default Notification;
