import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 10vh;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  text-align: center;
`;
const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  color: red;

  p {
    margin-bottom: 10px;
    font-size: ${FONT_SIZE.LG};
    @media ${theme.WINDOW_SIZE.TABLET} {
      font-size: ${FONT_SIZE.BASE};
    }
    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.SM};
    }
  }
`;
const Title = styled.p`
  font-size: ${FONT_SIZE.LG};
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: ${FONT_SIZE.SM};

  align-self: flex-start;
`;
const Date = styled.p`
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.TWO_XL};
`;

export {
  Container,
  ContentContainer,
  Title,
  Date,
  ErrorMessage,
  RadioContainer,
};
