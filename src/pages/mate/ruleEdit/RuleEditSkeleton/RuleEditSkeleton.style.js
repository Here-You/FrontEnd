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
  overflow-y: scroll;

  border-radius: 20px;
  padding: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Header = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;

  h1 {
    ${theme.ALIGN.ROW_CENTER};
  }
`;

const TitleInput = styled.div`
  padding: 20px;
  width: 60%;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const PlusSvg = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  margin-bottom: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const MatesContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 2px;
  margin-bottom: 20px;
`;

const MatesImages = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 50%;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Content = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
  margin-top: 20px;
`;

const ContentBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  width: 300px;
  height: 100px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DeleteRuleButton = styled.div`
  position: absolute;
  top: 23px;
  right: -90px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ContentTitleInput = styled.div`
  width: 200px;
  border-radius: 20px;
  padding: 15px;
  border: none;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ContentTextInput = styled.div`
  width: 80%;
  padding: 9px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const AddButtonWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 100px;
`;

const AddQuestionButton = styled.div`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const SubmitBtn = styled.div`
  border: none;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export {
  Container,
  Wrapper,
  PlusSvg,
  MatesContainer,
  MatesImages,
  Header,
  Content,
  ContentBox,
  TextContainer,
  TitleInput,
  ContentTextInput,
  ContentTitleInput,
  DeleteRuleButton,
  AddButtonWrapper,
  AddQuestionButton,
  SubmitBtn,
};
