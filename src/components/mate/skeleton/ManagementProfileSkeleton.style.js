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

const CenteredContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-bottom: 10px;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 375px;
  height: 85px;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  background-color: #cccccc;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const UserImg = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: none;
  position: absolute;
  left: 47px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  align-items: flex-start;
  width: 140px;
  gap: 3px;
  position: absolute;
  left: 110px;
  top: 10px;
`;

const UserName = styled.span`
  height: 20px;
  width: 80px;
  background-color: gray;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const UserNickName = styled.span`
  height: 20px;
  width: 120px;
  background-color: gray;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const UserBio = styled.span`
  height: 20px;
  width: 120px;
  background-color: gray;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 51px;
`;

const Button = styled.div`
  background-color: gray;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  CenteredContainer,
  ProfileContainer,
  UserImg,
  TextContainer,
  UserName,
  UserNickName,
  UserBio,
  Wrapper,
  Button,
};
