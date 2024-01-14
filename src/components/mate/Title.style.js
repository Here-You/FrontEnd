import styled from 'styled-components';

import theme from '@/theme';

const StyledSpan = styled.span`
  ${theme.ALIGN.COLUMN_CENTER}
  width: auto;
  height: 23px;
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export { StyledSpan };
