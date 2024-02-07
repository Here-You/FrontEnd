import styled from 'styled-components';

import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const TabContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
  width: 80%;
  height: 60px;

  margin-bottom: 20px;
`;

const TabElement = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  border-bottom: ${props =>
    props.active ? '1.517px solid ' + theme.COLOR.MAIN.GREEN : 'none'};
  color: ${props => (props.active ? theme.COLOR.MAIN.GREEN : 'none')};
`;

export { CenteredContainer, TabContainer, TabElement };
