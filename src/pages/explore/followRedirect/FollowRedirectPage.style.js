import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 40vh;
  margin: 0 auto;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const Text = styled.div`
  display: flex;
  font-size: 18px;
  font-family: 'Pretendard-bold';
`;

const Button = styled.div`
  display: flex;
  background-color: ${theme.COLOR.MAIN.GREEN};
  color: white;
  font-size: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  padding: 12px 50px;

  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;

export { PageContainer, ContentContainer, Button, Text };
