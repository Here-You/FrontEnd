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
  gap: 20px;
  padding: 10px 0;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 400px;
  height: 300px;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  animation: ${skeletonGradient} 1.5s infinite;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 90%;
    border-radius: 10px;
  }
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const IntroContainer = styled.div`
  text-align: center;
`;

const NickName = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const NickNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const FollowButton = styled.button`
  width: 50px;
  padding: 15px;
  border: none;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const InfoContainer = styled.div`
  width: 90%;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const CountContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
  margin-top: 20px;
`;

const CountInfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 5px;
`;

const CountInfoText = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Container,
  ProfileContainer,
  ProfileImage,
  IntroContainer,
  NickName,
  NickNameContainer,
  FollowButton,
  InfoContainer,
  CountContainer,
  CountInfoContainer,
  CountInfoText,
};
