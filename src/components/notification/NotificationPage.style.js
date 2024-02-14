import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 80%;
  align-items: start;
  margin-top: 50px;
`;
const NotificationContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 90%;
  align-items: start;
  justify-content: start;
  font-size: ${FONT_SIZE.LG};
  margin-bottom: 30px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
  span {
    color: ${theme.COLOR.MAIN.GREEN};
  }
`;
const Img = styled.img`
  width: 8%;
  margin-right: 20px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 10%;
  }
`;

const BellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 30vh;
  margin-top: 5S0%;
`;

const Bell = styled.img`
  display: flex;
  width: 30%;
`;

const Text = styled.div`
  display: flex;
  font-family: 'Pretendard-bold';
  font-size: 23px;
`;

export { Container, NotificationContainer, Img, BellContainer, Bell, Text };
