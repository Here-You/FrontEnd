import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const EditBox = styled.div`
  border-radius: 15px;
  padding: 25px 20px;
  width: 90%;
  margin-bottom: 10px;
  margin: 40px 0;
  background-color: ${theme.COLOR.MAIN.WHITE};
`;

const EditContent = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-family: 'Pretendard-light';
`;
const EditContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 0px;
  border-bottom: 1px solid #eeeeee;
  font-size: ${FONT_SIZE.BASE};

`;

const ArrowImg = styled.img`
 width: 30px;
`;
export { EditBox, EditContent, EditContentWrap, ArrowImg };
