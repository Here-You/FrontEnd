import styled, { keyframes } from 'styled-components';

import theme from '@/theme';

const skeletonGradient = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

const Header = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const StyledMyDiary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
    padding: 10px;
  }
`;

const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  padding: 20px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const DiaryCard = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 5px;
  border-radius: 10px;
  padding: 20px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const DiaryImage = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 8px;
  margin-bottom: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 150px;
    width: 150px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const EmojiContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
`;

const EmojiImage = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  margin-bottom: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Title = styled.div`
  width: 300px;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 5px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const Date = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Content = styled.div`
  font-size: 1rem;
  width: 250px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Header,
  Container,
  StyledMyDiary,
  DiaryCard,
  DiaryImage,
  EmojiContainer,
  EmojiImage,
  Title,
  Date,
  Content,
};
