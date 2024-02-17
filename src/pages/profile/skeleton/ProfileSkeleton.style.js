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
  padding: 10px;
  ${theme.ALIGN.COLUMN_CENTER};
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Title = styled.div`
  margin: 20px 0;
  font-size: 20px;
  align-items: flex-start;
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Image = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 20px;
`;

const DescriptionContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 140px;
  height: 140px;
  border-radius: 20px;
  backdrop-filter: blur(1px);
  position: absolute;
  top: 0;
  left: 0;
  animation: ${skeletonGradient} 1.5s infinite;
`;

// -----------------------------------

const ProfileContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  ${theme.ALIGN.COLUMN_CENTER};
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 90%;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 30px;
  margin-top: 10px;
  /* 
  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
    flex-direction: column;
    gap: 5px;
  } */
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 75px;
    height: 75px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-top: 0px;
  }
`;

const Button = styled.div`
  width: 50px;
  padding: 10px;
  border-radius: 20px;
  margin-left: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const InfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  white-space: nowrap;
  width: 90%;
  margin: auto;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 5px;
`;

const Intro = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 20px;
  text-align: left;
`;

const Text = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Container,
  Title,
  GridContainer,
  ImageContainer,
  Image,
  DescriptionContainer,
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  IntroContainer,
  TextContainer,
  Button,
  InfoContainer,
  CountContainer,
  Intro,
  Text,
};
