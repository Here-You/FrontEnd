import styled, { keyframes } from 'styled-components';

import theme from '@/theme';

const airplaneAnimation = keyframes`
  0% {
    transform: translateX(-100%) translateY(40px) rotate(0deg);
    opacity: 1;
  }

  30% {
    transform: translateX(100%) translateY(-50px) rotate(0deg);
    opacity: 1;
  }
  40% {
    transform: translateX(250%) translateY(-50px) rotate(-100deg);
    opacity: 1;
  }
  60% {
    transform: translateX(-100%) translateY(-150px) rotate(-100deg);
    opacity: 1;

  }
  70%{
    opacity:0;
    transform: translateX(-100%) translateY(-150px) rotate(-100deg);
  }
  100% {
    opacity: 0;
    
    transform: translateX(-100%) translateY(-150px) rotate(-100deg);
  } 

`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoginContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  justify-content: space-evenly;
  height: 100%;
  /*   background-image: url('/images/background.svg');
  background-size: cover;
  background-position: center; */
`;
const AirPlane = styled.img`
  width: 200px;
  animation: ${airplaneAnimation} 3s linear forwards;
`;

const LogoImg = styled.img`
  width: 65%;
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ButtonWrap = styled.div`
  width: 70%;
`;

export { LoginContainer, LogoImg, ButtonWrap, AirPlane };
