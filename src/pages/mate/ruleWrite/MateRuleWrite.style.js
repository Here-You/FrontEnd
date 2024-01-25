import styled from 'styled-components';

import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

export { CenteredContainer, ButtonWrapper };
