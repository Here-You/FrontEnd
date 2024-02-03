import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

const Gradation = styled.div`
  width: 150vh;
  height: 20%;
  z-index: 100;
  background: linear-gradient(to top left, white 10px, #ffe194 50%, white);
  margin-top: 60px;
  transform: rotate(150deg);
  filter: blur(80px);
`;

const LogoImg = styled.img`
  margin-bottom: 30px;
  width: 25%;
  align-self: center;
`;

const ContentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  height: 300px;
  z-index: 101;
  position: absolute;
  top: 30%;


  h1 {
    font-size: ${FONT_SIZE.FIVE_XL};
    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.THREE_XL};
    }
  }
  p {
    margin-top: 20px;
    font-size: ${FONT_SIZE.LG};
    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.SM};
    }
  }
`;

const StartButton = styled.button`
  align-self: center;
  margin-top: 30px;
  background-color: ${theme.COLOR.MAIN.GREEN};
  padding: 20px 60px;
  border: none;
  border-radius: 30px;
  font-size: ${FONT_SIZE.LG};
  color: white;
`;
export { LogoImg, Container, Gradation, ContentContainer, StartButton };
