import styled from 'styled-components';

import theme from '@/theme';

const TabContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
  width: 70%;
  min-width: 320px;
  max-width: 500px;
  height: 40px;
`;

const TabElement = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: ${props => (props.active ? '600 ' : '500')};
  line-height: 16px;
  letter-spacing: 0.076px;
  border-bottom: ${props =>
    props.active ? '3px solid ' + theme.COLOR.MAIN.GREEN : 'none'};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 14px;
  }
`;

const ProfileContainer = styled.div`
  overflow-y: scroll;
`;

export { TabContainer, TabElement, ProfileContainer };
