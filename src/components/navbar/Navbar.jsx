import * as S from './Navbar.style';
import Bell from '/images/Bell.svg';
import User from '/images/User.svg';
import main from '/images/main.svg';
import {
  useGetNotification,
  useUnReadNotification,
} from '@/hooks/notification/useGetNotification';

const Navbar = () => {
  const { data: unReadCount, isPending, isError } = useUnReadNotification();
  const unReadCounter = unReadCount?.data?.data?.unreadCount;

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
          {unReadCounter === 0 ? null : <p>{unReadCounter}</p>}
        </S.ImageContainer>
      </S.LinkTo>
    </S.NavWrapper>
  );
};

export default Navbar;
