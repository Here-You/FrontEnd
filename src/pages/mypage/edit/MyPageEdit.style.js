import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const EditPageContainer = styled.div`
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 40px 0;
`;

const UserInfo = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  width: 90%;
  margin-bottom: 40px;
  font-size: ${FONT_SIZE.LG};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

export { EditPageContainer, UserInfo };
