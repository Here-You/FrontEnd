import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  text-align: center;
`;

const Title = styled.p`
  font-size: ${FONT_SIZE.BASE};
  color: ${theme.COLOR.MAIN.BLACK};
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

const Content = styled.p`
  font-size: ${FONT_SIZE.BASE};
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
  font-family: 'Pretendard-light';
`;

const Date = styled.p`
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.TWO_XL};
`;

export { Container, ContentContainer, Title, Date, Content };
