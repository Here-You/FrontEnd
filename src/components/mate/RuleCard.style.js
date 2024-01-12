import styled from 'styled-components';

import theme from '@/theme';

const CardWrapper = styled.div`
  position: relative;
  width: 175px;
  height: 218px;
  background-color: ${theme.COLOR.MAIN.WHITE};
  border: 1px solid ${theme.COLOR.MAIN.WHITE};
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 10px;
  left: 8.14px;
  width: 158.721px;
  height: 133px;
  border-radius: 8px;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat,
    #d9d9d9;
`;

const StyledTitle = styled.span`
  position: absolute;
  top: 143px;
  left: 14.65px;
  width: 102.558px;
  height: 56px;

  color: ${theme.COLOR.MAIN.BLACK};
  font-family: 'Pretandard';
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  text-align: left;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 192px;
  left: 14.65px;

  color: ${theme.COLOR.MAIN.GRAY};
  font-family: 'Pretandard';
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

export { CardWrapper, StyledImg, StyledTitle, StyledSpan };
