import styled, { keyframes } from 'styled-components';

import theme from '@/theme';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

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

const Liked = styled.div`
  display: flex;
  outline: none;
  margin-left: 3px;
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: auto;
  gap: 10px;
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  gap: 2px;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  white-space: nowrap;
`;

const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 3px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto 10px auto;
  gap: 10px;
`;

const Title = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Content = styled.div`
  width: 80%;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 92%;
  margin: 10px auto 5px auto;
  gap: 2px;
`;

const ImageContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const Button = styled.div`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Image = styled.div`
  width: 300px;
  height: 400px;
  object-fit: cover;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 10px;
  padding: 10px;
`;

export {
  TitleContainer,
  HeaderContainer,
  ProfileContainer,
  ProfileImg,
  ProfileDesc,
  ButtonContainer,
  SignatureContainer,
  ImageContainer,
  Button,
  Image,
  TextContainer,
  Liked,
  Title,
  Content,
};
