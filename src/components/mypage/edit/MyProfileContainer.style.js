import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const EditContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.MAIN.WHITE};
  border-radius: 20px;
  width: 80%;
  height: 400px;
  padding: 10px;
`;

const ContentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  border-bottom: 1px solid gray;
  width: 80%;
  padding: 0 10px;
  height: 40px;
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;
  white-space: nowrap;

  h3 {
    font-size: ${FONT_SIZE.BASE};
    color: ${theme.COLOR.MAIN.GRAY};
  }

  p {
    margin-left: 40px;
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: 13px;
  }
`;

const ArrowImg = styled.img`
  width: 30px;
`;
export { EditContainer, ContentContainer, Content, ArrowImg };
