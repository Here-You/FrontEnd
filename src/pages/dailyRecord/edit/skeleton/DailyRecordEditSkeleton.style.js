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
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 10px;
`;

const PreviewImage = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 200px;
    height: 200px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100px;
    height: 100px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ImageInput = styled.input`
  display: none;
  color: transparent;
`;

const DateContainer = styled.div`
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 10px;
`;

const Text = styled.div`
  width: 70px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 43px 40px;
  width: 550px;
  height: 700px;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 23px 20px;
    width: 150px;
    min-width: 320px;
    border-radius: 20px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const RecordImageContainer = styled.div`
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  width: 300px;
  height: 300px;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`;

const WeatherContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  width: 100%;
`;

const LocationText = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 100%;
    height: 40px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
    height: 40px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const TitleText = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ContentText = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const UploadButton = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: absolute;
  height: 30px;
  width: 50px;
  padding: 10px;

  bottom: 0px;
  left: 250px;

  border-radius: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 5px;
    left: 130px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Container,
  DateContainer,
  RecordContainer,
  RecordImageContainer,
  TitleText,
  LocationText,
  WeatherContainer,
  ContentText,
  ImageInput,
  PreviewImage,
  UploadButton,
  Text,
};
