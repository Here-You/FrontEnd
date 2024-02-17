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
  ${theme.ALIGN.COLUMN_CENTER}
  width: 80%;
  align-items: start;
  margin-top: 50px;
`;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 100px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 40px;
    height: 40px;
  }
  animation: ${skeletonGradient} 1.5s infinite;
`;

const BellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 30vh;
`;

const Bell = styled.img`
  display: flex;
  width: 30%;
`;

const Text = styled.div`
  display: flex;
  width: 65%;
  padding: 15px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

export { Container, NotificationContainer, Img, BellContainer, Bell, Text };
