import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const EditContainer = styled.div`
  border-radius: 15px;
  padding: 20px;
  width: 85%;
  justify-content: space-between;
  margin: 40px 0;
  background-color: ${theme.COLOR.MAIN.WHITE};
  @media ${theme.WINDOW_SIZE.MOBILE} {
      padding: 10px;
    }
    @media ${theme.WINDOW_SIZE.PC} {
      
    }
  
`;

const EditContentContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 100%;
  justify-content: space-between;
  padding: 10px 0px 10px;
  font-size: ${FONT_SIZE.LG};
  height: 43px;
  border-bottom: ${props => (props.id === 2 ? 'none' : '1px solid #eeeeee')};
  cursor: pointer;

  p {
    padding: 0px 10px;
    color: ${theme.COLOR.MAIN.GRAY};
    font-family: 'Pretendard-light';

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.SM};
    }

    @media ${theme.WINDOW_SIZE.PC} {
      font-size: ${FONT_SIZE.SM};
    }
  }

  &:hover {
    background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
    border-radius: 10px;
    padding: 10px 0;
  }
`;

const ArrowImg = styled.img`
  width: 30px;
`;
export { EditContainer, EditContentContainer, ArrowImg };
