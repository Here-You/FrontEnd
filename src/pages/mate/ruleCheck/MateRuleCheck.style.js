import styled from 'styled-components';

import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const StyledTitle = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 47px;
`;

export { CenteredContainer, StyledTitle };
