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

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Wrapper = styled.div`
  width: 80%;
  height: 900px;

  border-radius: 20px;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Header = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
`;

const Title = styled.div`
  width: 200px;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const ProfileBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-right: 10px;
`;

const ProfileImages = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  object-fit: cover;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 20px;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 10px;
  gap: 5px;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ContentTextInput = styled.textarea`
  width: 80%;
  padding: 9px;
  border: none;
  resize: none;
  font-size: 0.8rem;
  color: ${theme.COLOR.MAIN.GRAY};
`;

const AddButtonWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
`;

const AddQuestionButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const UpdateBtn = styled.button`
  border: none;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border-radius: 20px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px 40px;
`;

const Text = styled.div`
  width: 50%;
  padding: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Container,
  Wrapper,
  ProfileBox,
  ProfileContainer,
  ProfileImages,
  Header,
  Content,
  TextContainer,
  Title,
  ContentTextInput,
  AddButtonWrapper,
  AddQuestionButton,
  UpdateBtn,
  CommentsContainer,
  Text,
};
