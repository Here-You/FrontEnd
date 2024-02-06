import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin: auto;
  height: 70dvh;
  img {
    width: 400px;
    height: 200px;
  }
`;

const ErrorContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;

  h1 {
    font-size: 25px;
    color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  }
`;

const RoutingBox = styled.div`
  cursor: pointer;
  margin-top: 30px;
  color: ${theme.COLOR.MAIN.LIGHT_BLACK};
`;

const RoutingText = styled.h3`
  font-size: 20px;
`;

export { Container, ErrorContainer, RoutingBox, RoutingText };
