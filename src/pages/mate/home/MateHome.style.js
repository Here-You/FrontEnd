import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

const SpanWrapper = styled.div`
  margin-bottom: 46px;
  margin-top: 22.93px;
  ${theme.ALIGN.ROW_CENTER};

  span {
    color: rgba(0, 0, 0, 0.57);
    text-align: center;
    font-size: 12.268px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 200px;
  }
`;

const MainContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-bottom: 40px;
  gap: 20px;
`;

const CardContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  flex-direction: row;
  gap: 20px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { SpanWrapper, MainContainer, CardContainer, LinkTo };
