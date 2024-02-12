import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  overflow: scroll;
  height: 500px;
  ${theme.ALIGN.COLUMN_CENTER}
`;

const LoadingWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  height: 20px;
`;

export { Container, LoadingWrapper };
