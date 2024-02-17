import styled, { keyframes } from 'styled-components';

import theme from '@/theme';

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
`;

const LogoImg = styled.img`
  width: 65%;
  margin-bottom: 100px 0px 200px 0px;
  animation: ${fadeIn} 1s ease-in-out;
`;
const LoginButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonWrap = styled.div`
  width: 70%;
  margin-top: 150px;
`;

export { LoginContainer, LoginButtonWrapper, LogoImg, ButtonWrap };
