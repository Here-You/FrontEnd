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
  width: 80%;
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

const Text = styled.div`
  display: flex;
  font-family: 'Pretendard-bold';
  font-size: 16px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1rem;
  color: ${theme.COLOR.MAIN.MEDIUM_GREEN};
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(0.99);
  }
`;

export { PageContainer, EmptyContainer, Title, PreviewContainer, Text, Button };
