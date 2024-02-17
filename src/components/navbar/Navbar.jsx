import * as S from './Navbar.style';
import Bell from '/images/Bell.svg';
import User from '/images/User.svg';
import main from '/images/main.svg';
import { useUnReadNotification } from '@/hooks/notification/useGetNotification';
import useAuth from '@/store/useAuth';

const Navbar = ({ toggleSideMenu }) => {
  const { isAuth } = useAuth();
  const { data: unReadCount, isPending, isError } = useUnReadNotification();
  const unReadCounter = unReadCount?.data?.data?.unreadCount;

  return (
    <S.NavWrapper>
      <S.LinkTo to="/mypage">
        <S.ImageIcon src={User} />
      </S.LinkTo>
      <S.LinkTo to="/">
        <S.LogoIcon src={main} />
      </S.LinkTo>
      <S.ImageContainer>
        <S.SideMenuContainer onClick={toggleSideMenu}>
          <S.MenuIcon />
        </S.SideMenuContainer>
        <S.LinkTo to="/notification">
          <S.ImageIcon src={Bell} />
          {unReadCounter === 0 ? null : <p>{unReadCounter}</p>}
        </S.LinkTo>
      </S.ImageContainer>
    </S.NavWrapper>
  );
};

export default Navbar;
