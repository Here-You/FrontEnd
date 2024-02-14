import * as S from './Navbar.style';
import Bell from '/images/Bell.svg';
import User from '/images/User.svg';
import main from '/images/main.svg';
import { useGetNotification } from '@/hooks/notification/useGetNotification';

const Navbar = () => {
  const { data, isPending, isError } = useGetNotification();
  const notifications = data?.data?.data;

  const countReadNotification = notifications => {
    return notifications?.filter(notification => !notification.isRead)?.length;
  };

  return (
    <S.NavWrapper>
      <S.LinkTo to="/mypage">
        <S.ImageIcon src={User} />
      </S.LinkTo>
      <S.LinkTo to="/">
        <S.Image src={main} />
      </S.LinkTo>
      <S.LinkTo to="/notification">
        <S.ImageContainer>
          <S.ImageIcon src={Bell} />
          {countReadNotification(notifications) === 0 ? null : (
            <p>{countReadNotification(notifications)}</p>
          )}
        </S.ImageContainer>
      </S.LinkTo>
    </S.NavWrapper>
  );
};

export default Navbar;
