import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 5px;
`;

const IconButtonContainer = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const IconImage = styled.img`
  width: 15px;
  height: 15px;
`;

export { Container, IconButtonContainer, IconImage };
