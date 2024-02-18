import * as S from './Notification.style';
import NotificationPage from '@/components/notification/NotificationPage';
import NotificationSkeleton from '@/components/notification/skeleton/NotificationSkeleton';
import { useGetNotification } from '@/hooks/notification/useGetNotification';

const Notification = () => {
  const { data, isPending, isError } = useGetNotification();
  const notifications = data?.data?.data;

  return (
    <S.Container>
      {isPending ? (
        <NotificationSkeleton />
      ) : (
        <NotificationPage notifications={notifications} />
      )}
    </S.Container>
  );
};

export default Notification;
