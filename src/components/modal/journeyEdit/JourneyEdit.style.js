import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const Title = styled.p`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.SM};
`;

const Input = styled.input`
  font-size: ${FONT_SIZE.SM};
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
  padding: 10px;
  outline: none;
`;

const Date = styled.p`
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.TWO_XL};
`;

export { Container, ContentContainer, Title, Input, Date };
