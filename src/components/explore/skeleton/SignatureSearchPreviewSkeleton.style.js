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

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 3%;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const PreviewImg = styled.div`
  display: flex;
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 5px;
`;

const PreviewTitle = styled.div`
  width: 120px;
  padding: 10px;
  border-radius: 20px;
  margin-left: 10px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const Profile = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 140px;
  padding: 10px;
  gap: 5px;
  justify-content: flex-start;
`;

const ProfileImg = styled.div`
  display: flex;
  width: 25px;
  height: 25px;

  border-radius: 50%;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Nickname = styled.div`
  border-radius: 20px;
  width: 50px;
  padding: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Date = styled.div`
  display: flex;
  width: 70%;
  border-radius: 20px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const HeartContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 40px;
  width: 140px;
  gap: 2px;
  border-radius: 20px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const Open = styled.div`
  display: flex;

  cursor: pointer;
`;

const Info = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;
  margin-top: 5px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 95%;
  margin: 0 auto;
  margin-top: 70px;
`;

const EmptyContainer = styled.div`
  width: 80%;
  margin: auto;
  height: 400px;
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  width: 300px;
  padding: 15px;
  margin-left: 10px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const PreviewContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Text = styled.div`
  display: flex;
`;

export {
  PreviewWrap,
  Profile,
  ProfileImg,
  Date,
  PreviewImg,
  PreviewTitle,
  Open,
  Nickname,
  Info,
  HeartContainer,
  PageContainer,
  EmptyContainer,
  Title,
  PreviewContainer,
  Text,
};
