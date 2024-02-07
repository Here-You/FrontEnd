import styled from 'styled-components';

import theme from '@/theme';

const NoResult = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  span {
    color: rgba(0, 0, 0, 0.57);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

export { NoResult };
