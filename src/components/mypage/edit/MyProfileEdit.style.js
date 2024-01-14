import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const EditContainer = styled.div`
  border-radius: 15px;
  padding: 20px 20px;
  width: 85%;
  margin-bottom: 10px;
  margin: 40px 0;
  background-color: ${theme.COLOR.MAIN.WHITE};
`;

const EditContentContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 100%;
  justify-content: space-between;
  padding: 10px 0px 10px;
  border-bottom: 1px solid #eeeeee;
  font-size: ${FONT_SIZE.LG};
  height: 43px;
  align-items: center;

  p {
    color: ${theme.COLOR.MAIN.GRAY};
    font-family: 'Pretendard-light';
  }
`;

const ArrowImg = styled.img`
  width: 30px;
`;
export { EditContainer, EditContentContainer, ArrowImg };
