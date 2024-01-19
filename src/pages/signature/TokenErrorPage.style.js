import styled, { keyframes } from 'styled-components';

import theme from '@/theme';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

const BackgroundColor = styled.div`
  display: flex;
  width: 600px;
  height: 100px;
  transform: rotate(-27.166deg);
  flex-shrink: 0;
  background-color: #ffe194;
  filter: blur(50px);
  position: absolute;
  top: 50%;
  z-index: 0;
`;

const LogoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  height: 10%;
  width: 100%;
`;

const SpaceLogo = styled.img`
  z-index: 1;
  height: 80%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 36px;
  font-family: 'Pretendard-bold';
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 1;
  margin: 20px;
  color: ${theme.COLOR.MAIN.BLACK};
`;

const AnimatedText = styled.div`
  animation: ${fadeInLeft} 1s ease-out;
  z-index: 100;
`;

const Text = styled.div`
  z-index: 1;
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StartButton = styled.button`
  z-index: 1;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  outline: none;
  cursor: pointer;
  background-color: ${theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  border-radius: 30px;
  padding: 16px 50px;
  margin: 16px;
  font-family: 'Pretendard-bold';
  font-size: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: ${theme.COLOR.MAIN.WHITE};
    color: ${theme.COLOR.MAIN.GREEN};
    border: 1px solid ${theme.COLOR.MAIN.GREEN};
  }
`;

export {
  PageContainer,
  BackgroundColor,
  LogoWrapper,
  SpaceLogo,
  TextContainer,
  Text,
  AnimatedText,
  StartButton,
};
