import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const PreviewContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media ${theme.WINDOW_SIZE.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { PageContainer, PreviewContainer };
