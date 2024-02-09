import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const MateLookContainer = styled.div`
  gap: 10px;
`;

const Title = styled.h1`
  padding: 25px;
  font-size: ${FONT_SIZE.TWO_XL};
  color: ${theme.COLOR.MAIN.GRAY};
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  margin-top: 20px;
  padding: 0 20px;
`;

const MateContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
`;

export { Title, MateLookContainer, CenteredContainer, MateContainer };
