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
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 60px 50px 0 50px;
  gap: 10px;
  height: 100%;
  width: 100%;

  overflow: hidden;
`;

const DateText = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const MainRecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 23px 20px;
  border-radius: 30px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const RecordContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  height: 100%;
`;

const PreviewImage = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 180px;
    height: 180px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100px;
    height: 100px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const LocationText = styled.div`
  display: flex;
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  height: 30px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    height: 35px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 20px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const TitleText = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 350px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 5px;
    width: 150px;
  }
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Container,
  DateText,
  MainRecordContainer,
  RecordContentsContainer,
  PreviewImage,
  LocationText,
  TitleText,
  ContentText,
  WeatherContainer,
};
