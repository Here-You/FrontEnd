import styled from 'styled-components';

import theme from '@/theme';

const SignUpContainer = styled.div`
  padding: 0 40px;
  ${theme.ALIGN.COLUMN_CENTER}
  height: 100%;
  width: 100%;
  justify-content: space-around;
  
  h2{
    align-self: flex-start;
    margin-left: 40px;
  }
`;

export { SignUpContainer };
