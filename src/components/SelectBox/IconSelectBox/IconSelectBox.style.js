import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const IconButtonContainer = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  outline: none;

  cursor: pointer;
  background-color: ${props =>
    props.$selectdIcon ? `${theme.COLOR.MAIN.LIGHT_GREEN}` : 'transparent'};
  border: 0;
  border-radius: 20px;

  padding: 0 5px;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 15px;
    height: 25px;
  }
`;

export { Container, IconButtonContainer, IconImage };
