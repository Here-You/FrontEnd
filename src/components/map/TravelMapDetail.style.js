import styled from 'styled-components';

import theme from '@/theme';

const InfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  img {
    border-radius: 10px;
  }

  span {
    margin-top: 10px;
    font-size: 12px;
  }
`;

export { InfoContainer };
