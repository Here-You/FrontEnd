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
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 40px;
  border-radius: 40px;

  @media (max-width: 600px) {
    width: 280px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Button = styled.button`
  width: 200px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 40px;
  border: none;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const CircleWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 100px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const HomeContentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 50px;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  margin-bottom: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Wrapper,
  Button,
  ButtonContainer,
  HeaderWrapper,
  CircleWrapper,
  Circle,
  HomeContentContainer,
};
