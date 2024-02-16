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

const PreviewWrap = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  height: 280px;
  width: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const DateWrapper = styled.div`
  display: flex;
  padding: 10px 25px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 5px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Date = styled.div`
  margin-left: 2px;
  font-size: 12px;
`;

const PreviewImg = styled.div`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  border-radius: 10px;
  padding: 3px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 3px 0px;
  width: 60%;
  padding: 15px;
  overflow: hidden;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Open = styled.div`
  display: flex;
  width: 30%;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  PreviewImg,
  DateWrapper,
  PreviewWrap,
  Date,
  ContentContainer,
  Title,
  Open,
};
