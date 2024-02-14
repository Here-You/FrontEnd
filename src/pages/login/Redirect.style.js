import styled, { keyframes } from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;
  gap: 30px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};

  h3 {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: ${FONT_SIZE.XL};
  }

  p {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: ${FONT_SIZE.LG};
  }
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

export { Container, Image };
