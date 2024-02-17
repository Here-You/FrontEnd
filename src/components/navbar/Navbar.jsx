import { useState } from 'react';

import SideMenu from '../sideMenu/SideMenu';
import * as S from './Navbar.style';
import Bell from '/images/Bell.svg';
import User from '/images/User.svg';
import main from '/images/main.svg';
import { FONT_SIZE } from '@/constants/size';
import { useUnReadNotification } from '@/hooks/notification/useGetNotification';
import useAuth from '@/store/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useAuth();
  const { data: unReadCount, isPending, isError } = useUnReadNotification();
  const unReadCounter = unReadCount?.data?.data?.unreadCount;

  const toggleSideMenu = () => {
    setIsOpen(prev => !prev);
    console.log(isOpen);
  };

  return (
    <S.NavWrapper>
      <S.LinkTo to="/mypage">
        <S.ImageIcon src={User} />
      </S.LinkTo>
      <S.LinkTo to="/">
        <S.Image src={main} />
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

      {/* {isOpen && <SideMenu />} */}
    </S.NavWrapper>
  );
};

export default Navbar;
