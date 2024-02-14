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

const ListContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin: 20px;
`;

const ListWrapper = styled.div`
  width: 90%;
  padding: 20px 40px;
  border-radius: 20px;
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;

  cursor: pointer;
  animation: ${skeletonGradient} 1.5s infinite;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 30px;
  }
`;

const MarkImage = styled.div`
  border-radius: 50px;
  width: 50px;
  height: 40px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ListDescriptionContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Text = styled.div`
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Title = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  MarkImage,
  ListWrapper,
  ListContainer,
  ListDescriptionContainer,
  TextContainer,
  Text,
  Title,
};
