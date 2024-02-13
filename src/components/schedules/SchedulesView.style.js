import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  width: 100%;
  height: ${props => (props.$showContainer ? '500px' : '0px')};
  overflow: ${props => (props.$showContainer ? 'scroll' : '')};

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${theme.COLOR.MAIN.LIGHT_GREEN};
  }
`;

const IntroMessage = styled.div`
  width: 100%;
  padding: 20px;
  color: ${theme.COLOR.MAIN.BLACK};

  &:hover {
    border-radius: 10px;
    background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
    cursor: pointer;
  }
`;

export { Container, IntroMessage };
