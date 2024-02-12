import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 5px;

  h3 {
    color: ${theme.COLOR.MAIN.BLACK};
  }

  h4 {
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

export { Container };
