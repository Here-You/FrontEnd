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

const MateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 230px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const MateDescriptionBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 80%;
  margin-right: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 10px;
`;

const MateImage = styled.div`
  width: 70px;
  height: 70px;
  padding: 15px;
  border-radius: 50%;
  margin: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  border-radius: 10px;
  margin-top: 5px;
  width: 120px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Text = styled.div`
  display: flex;
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  MateBox,
  MateDescriptionBox,
  MateImage,
  TextBox,
  TextContainer,
  Button,
  Text,
  ButtonContainer,
};
