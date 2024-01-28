import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const IconButtonContainer = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: ${props =>
    props.$selectdIcon ? `${theme.COLOR.MAIN.LIGHT_GREEN}` : 'transparent'};
  border-radius: 20px;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
  padding: 2px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 15px;
    height: 25px;
  }
`;

export { Container, IconButtonContainer, IconImage };
