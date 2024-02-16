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
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  gap: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const MateDescriptionBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ImageWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 300px;
  height: 100%;
  padding: 10px;
  margin-top: 60px;
  gap: 10px;
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

const TextBox = styled.div`
  width: 200px;
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  gap: 10px;
`;

const Text = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const FollowButton = styled.button`
  width: 50px;
  padding: 15px;
  border: none;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const MateImage = styled.div`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
`;

const SignatureImage = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
  object-fit: cover;
  border-radius: 5px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Image = styled.div`
  width: 170px;
  height: 180px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  MateDescriptionBox,
  MateBox,
  TextBox,
  TextContainer,
  MateImage,
  SignatureContainer,
  SignatureImage,
  ImageContainer,
  Image,
  ImageWrapper,
  Text,
  FollowButton,
};
