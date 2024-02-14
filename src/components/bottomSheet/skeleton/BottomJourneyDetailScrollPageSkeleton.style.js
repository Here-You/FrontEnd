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

const ImageContainer = styled.div`
  margin-top: 40px;
  ${theme.ALIGN.ROW_CENTER};
`;

const Image = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  ${theme.ALIGN.COLUMN_CENTER}
  gap: 12px;
`;

const Button = styled.button`
  ${theme.ALIGN.ROW_CENTER};
  border: none;
  width: 400px;
  height: 60px;
  border-radius: 30px;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;

  animation: ${skeletonGradient} 1.5s infinite;
`;

export { Button, Image, ImageContainer, ButtonContainer };
