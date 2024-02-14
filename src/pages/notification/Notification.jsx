import * as S from './Notification.style';
import NotificationPage from '@/components/notification/NotificationPage';
import { useGetNotification } from '@/hooks/notification/useGetNotification';

const Notification = () => {
  const { data, isPending, isError } = useGetNotification();
  const notification = data?.data?.data;
  return (
    <S.Container>
      <NotificationPage notification={notification} />
    </S.Container>
  );
};

export default Notification;
