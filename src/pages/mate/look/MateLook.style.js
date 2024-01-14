import styled from 'styled-components';

import theme from '@/theme';

const ContainerContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const FixedContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  align-items: flex-start;
  width: 269px;
  height: 164px;
`;

const StyledTitle = styled.span`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 17px;
`;

const StyledDes = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 205px;
  height: 56px;
`;

const StyledIcon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 96px;
  height: 96px;
  border: none;
`;

export {
  ContainerContainer,
  FixedContainer,
  StyledTitle,
  StyledDes,
  StyledIcon,
};
