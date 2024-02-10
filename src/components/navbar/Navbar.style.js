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
  // 정렬 사용방법 (ROW_CENTER, COLUMN_CENTER)

  /* 태블릿 반응형 사용법 */
  /* @media ${theme.WINDOW_SIZE.TABLET} {
    background-color: ${theme.COLOR.MAIN.WHITE};
  } */

  /* 모바일 반응형 사용법 */
  /* @media ${theme.WINDOW_SIZE.MOBILE} {
    background-color: ${theme.COLOR.WHITE};
  } */
`;

const Image = styled.img`
  display: flex;
  height: 46px;
`;
const ImageIcon = styled.img`
  display: flex;
  height: 35px;
`;

const LinkTo = styled(Link)``;

export { NavWrapper, Image, ImageIcon, LinkTo };
