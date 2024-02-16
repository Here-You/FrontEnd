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
  border-radius: 20px;
  margin-top: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 10px auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const Time = styled.div`
  display: flex;
  width: 100px;
  padding: 20px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Text = styled.div`
  display: flex;
  color: #393939;
  font-size: 20px;
  font-family: 'Pretendard-bold';
  font-weight: 700;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  padding: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export { Wrapper, Container, ContentContainer, Time, Text, Image };
