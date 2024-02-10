import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

//

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  gap: 10px;
`;

export { Container, Image, GridContainer };
