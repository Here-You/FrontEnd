import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '../../constants/size';
import theme from '../../theme';

const NavWrapper = styled.div`
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

const ImageContainer = styled.div`
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

export { NavWrapper, Image, ImageIcon, ImageContainer, LinkTo };
