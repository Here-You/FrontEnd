import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #ccc;
  }
`;

const LoadingWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  height: 20px;
`;

export { Container, LoadingWrapper };
