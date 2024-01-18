import styled from 'styled-components';

import theme from '@/theme';

const CardContainer = styled.div`
  position: relative;
  width: 142px;
  height: 160px;
  background-color: ${theme.COLOR.MAIN.WHITE};
  border: 1px solid ${theme.COLOR.MAIN.WHITE};
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  position: absolute;
  top: 24px;
  left: 13px;
`;

const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 54px;
  left: 42px;
  width: 96px;
  height: 96px;
`;

export { CardContainer, TextContainer, StyledSpan, StyledImg };
