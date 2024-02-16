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

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 15%;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  gap: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 35%;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 60%;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  width: 200px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Wrapper,
  Container,
  LogoContainer,
  ContentContainer,
  Text,
  TextContainer,
};
