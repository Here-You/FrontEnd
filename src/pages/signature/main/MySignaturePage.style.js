import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  margin-top: 20px;
  ${theme.ALIGN.COLUMN_CENTER};
`;
const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

export { PageContainer, PreviewContainer };
