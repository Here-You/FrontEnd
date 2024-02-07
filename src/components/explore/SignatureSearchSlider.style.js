import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const EmptyContainer = styled.div`
  margin: auto;
  height: 400px;
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  margin-left: 10px;

  font-family: 'Pretendard-bold';
`;

const PreviewContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export { PageContainer, EmptyContainer, Title, PreviewContainer };
