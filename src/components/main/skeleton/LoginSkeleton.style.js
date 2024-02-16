import styled, { keyframes } from 'styled-components';

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

const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 12%;
  border-radius: 0px 0px 20px 20px;
  align-items: center;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

const Img = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ProfileContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 5%;
  gap: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Text1 = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Text2 = styled.div`
  width: 200px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  LoginWrapper,
  Container,
  Img,
  ProfileContainer,
  TextContainer,
  Text1,
  Text2,
  TextWrapper,
};
