import toast from 'react-hot-toast';

import * as S from './Navbar.style';
import Bell from '/images/Bell.svg';
import User from '/images/User.svg';
import main from '/images/main.svg';
import { useUnReadNotification } from '@/hooks/notification/useGetNotification';
import useAuth from '@/store/useAuth';

const Navbar = () => {
  const { data: unReadCount, isPending, isError } = useUnReadNotification();
  const { isLogin } = useAuth();
  const unReadCounter = unReadCount?.data?.data?.unreadCount;

  return (
    <S.NavWrapper>
      <S.LinkTo to="/mypage">
        <S.ImageIcon src={User} />
      </S.LinkTo>
      <S.LinkTo to="/">
        <S.Image src={main} />
      </S.LinkTo>
      {isLogin ? (
        <S.LinkTo to="/notification">
          <S.ImageContainer>
            <S.ImageIcon src={Bell} />

            {!unReadCounter ? null : <p>{unReadCounter}</p>}
          </S.ImageContainer>
        </S.LinkTo>
      ) : (
        <div onClick={() => toast('로그인 후 알림을 확인해주세요!')}>
          <S.ImageIcon src={Bell} />
        </div>
      )}
    </S.NavWrapper>
  );
};

export default Navbar;
