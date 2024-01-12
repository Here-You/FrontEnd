import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

const SpanContainer = styled.div`
  margin-bottom: 46px;
  margin-top: 22.93px;
  ${theme.ALIGN.ROW_CENTER}
`;

const styledSpan = styled.span`
  color: rgba(0, 0, 0, 0.57);
  text-align: center;
  font-family: 'Inter';
  font-size: 12.268px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 200px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { SpanContainer, styledSpan, MainContainer, CardContainer, LinkTo };
