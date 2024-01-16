import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const EditContainer = styled.div`
  border-radius: 15px;
  padding: 20px 20px;
  width: 85%;
  justify-content: space-between;
  margin: 40px 0;
  background-color: ${theme.COLOR.MAIN.WHITE};
`;

const EditContentContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 100%;
  justify-content: space-between;
  padding: 10px 0px 10px;
  font-size: ${FONT_SIZE.LG};
  height: 43px;
  border-bottom: ${props => (props.id === 2 ? 'none' : '1px solid #eeeeee')};
  p {
    color: ${theme.COLOR.MAIN.GRAY};
    font-family: 'Pretendard-light';
  }
`;

const ArrowImg = styled.img`
  width: 30px;
`;
export { EditContainer, EditContentContainer, ArrowImg };
