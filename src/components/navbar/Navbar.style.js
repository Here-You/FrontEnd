import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '../../constants/size';
import theme from '../../theme';
import { CiMenuBurger } from 'react-icons/ci';

const NavWrapper = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto;
  height: 9%;
  background-color: ${theme.COLOR.MAIN.WHITE};
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.SEVEN_XL};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Image = styled.img`
  display: flex;
  height: 46px;
`;

const ImageIcon = styled.img`
  display: flex;
  height: 35px;
`;

const LogoIcon = styled.img`
  display: flex;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: relative;

  p {
    position: absolute;
    ${theme.ALIGN.ROW_CENTER}
    top: -3px;
    font-size: 0.8rem;
    right: -2px;
    background-color: ${theme.COLOR.MAIN.RED};
    color: ${theme.COLOR.MAIN.WHITE};
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
`;

const LinkTo = styled(Link)``;

const MenuIcon = styled(CiMenuBurger)`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.TWO_XL};
`;

const SideMenuContainer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
  }
`;

export {
  NavWrapper,
  Image,
  ImageIcon,
  ImageContainer,
  LinkTo,
  MenuIcon,
  SideMenuContainer,
  LogoIcon,
};
