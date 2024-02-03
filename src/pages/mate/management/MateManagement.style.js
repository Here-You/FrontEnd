import styled from 'styled-components';

import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const TabContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
  width: 273px;
  height: 37.2px;
`;

const TabElement = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.167px;
  letter-spacing: 0.076px;
  border-bottom: ${props =>
    props.active ? '3px solid ' + theme.COLOR.MAIN.GREEN : 'none'};
`;

export { CenteredContainer, TabContainer, TabElement };
