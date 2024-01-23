import styled from 'styled-components';

import theme from '@/theme';

const NoResult = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;

  span {
    color: rgba(0, 0, 0, 0.57);
    text-align: center;
    font-size: 12.268px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export { NoResult };
