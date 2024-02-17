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
`;

const PreviewImg = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 5px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const PreviewTitle = styled.div`
  width: 120px;
  padding: 8px;
  border-radius: 20px;
  margin-top: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Profile = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 140px;
  gap: 5px;
  justify-content: flex-start;
  margin-top: 5px;
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
  width: 80px;
  padding: 8px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Date = styled.div`
  display: flex;
  width: 50%;
  padding: 5px;
  border-radius: 20px;

  animation: ${skeletonGradient} 1.5s infinite;
`;

const HeartContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 40px;
  width: 20px;
  height: 20px;
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
  width: 200px;
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
