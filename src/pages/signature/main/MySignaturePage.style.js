import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { PageContainer, PreviewContainer };
