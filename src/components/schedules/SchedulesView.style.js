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

export { Container };
