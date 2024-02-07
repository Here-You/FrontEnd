import styled from 'styled-components';

import theme from '@/theme';

const StyledTitle = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 35px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

export { StyledTitle };
