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
  width: 48%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
`;

const Icon = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: -10px;
  max-height: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  gap: 10px;
`;

const Text1 = styled.div`
  display: flex;
  width: 150px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export { Wrapper, Container, Icon, TextContainer, Text1 };
