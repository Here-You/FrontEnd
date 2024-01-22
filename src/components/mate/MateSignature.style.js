import styled from 'styled-components';

import theme from '@/theme';

const SubWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 21px;
  }
`;

export { SubWrapper };
