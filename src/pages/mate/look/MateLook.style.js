import styled from 'styled-components';

import theme from '@/theme';

const MateLookContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
`;

const CenteredContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin: 0 20px;
`;

export { MateLookContainer, CenteredContainer };
