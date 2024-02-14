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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px 0;
  cursor: pointer;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 125px;
  border-radius: 13px;
  padding: 20px 15px;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 320px;
  }

  animation: ${skeletonGradient} 1.5s infinite;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.input`
  border: 0;
  outline: none;
  max-width: 260px;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    max-width: 160px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Date = styled.p`
  display: flex;
  gap: 5px;
  margin-left: auto;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const Mate = styled.div`
  display: flex;
  gap: 5px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 200px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const CursorPointer = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 20px;
  border-radius: 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin-left: auto;
  border-radius: 20px;

  cursor: pointer;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const SaveButton = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 5px;
  border: 0;
  border-radius: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 5px 3px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ShortLine = styled.div`
  display: block;
  position: relative;
  height: 20px;
  margin-left: 20px;
  border-left: 2px dashed #21b69c;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Container,
  MainContainer,
  RowContainer,
  Title,
  Date,
  Mate,
  CursorPointer,
  Image,
  LeftContainer,
  SaveButton,
  ShortLine,
};
