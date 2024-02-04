import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 20px 0;
`;

const MateContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
export default MateContainer;
