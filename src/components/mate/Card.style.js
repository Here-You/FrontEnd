import styled from 'styled-components';

import theme from '@/theme';

const CardContainer = styled.div`
  position: relative;
  background-color: ${theme.COLOR.MAIN.WHITE};
  border: 1px solid ${theme.COLOR.MAIN.WHITE};
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;

  width: 172px;
  height: 190px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 142px;
    height: 160px;
  }
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  position: absolute;
  top: 22px;
  left: 14px;
`;

const StyledSpan = styled.span`
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0em;
  text-align: left;
  font-size: 22px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 16px;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  top: 74px;
  left: 60px;
  width: 110px;
  height: 110px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    top: 54px;
    left: 42px;
    width: 96px;
    height: 96px;
  }
`;

export { CardContainer, TextContainer, StyledSpan, StyledImg };
