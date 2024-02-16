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

const Wrapper = styled.div`
  display: flex;
  height: 25%;
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  gap: 10px;
`;

const Text1 = styled.div`
  display: flex;
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Text2 = styled.div`
  display: flex;
  width: 200px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: space-around;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 80%;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  animation: ${skeletonGradient} 1.5s infinite;
`;
const Icon = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;
export {
  Wrapper,
  Container,
  TextContainer,
  Text1,
  Text2,
  Box,
  BoxContainer,
  Icon,
};
