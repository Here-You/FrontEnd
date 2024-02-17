import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
  color: black;
  border: none;
  padding: 10px 11px;
  margin-bottom: 26px;
  border-radius: 100px;
  background-color: ${theme.COLOR.MAIN.WHITE};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  font-size: ${FONT_SIZE.BASE};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(0.99);
  }

  h3 {
    font-family: 'Pretendard-semibold';
    font-size: 16px;
    width: 90%;
  }
`;

const KLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
  color: black;
  border: none;
  padding: 10px 11px;
  margin-bottom: 26px;
  border-radius: 100px;
  background-color: #fae100;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  font-size: ${FONT_SIZE.BASE};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(0.99);
  }

  h3 {
    font-family: 'Pretendard-semibold';
    font-size: 16px;
    width: 90%;
  }
`;

const Icon = styled.img`
  display: flex;
  margin-left: 10px;
  width: 25px;
`;
export { LoginButton, KLoginButton, Icon };
