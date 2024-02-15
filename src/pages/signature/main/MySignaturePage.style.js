import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  margin-top: 20px;
`;
const PreviewContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  justify-items: center;

  @media ${theme.WINDOW_SIZE.TABLET} {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;

export { PageContainer, PreviewContainer };
