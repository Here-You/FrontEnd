import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 30;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(7px);
`;

const ModalContentContainer = styled.div`
  width: 360px;
  height: 240px;
  z-index: 99;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: white;
  ${theme.ALIGN.COLUMN_CENTER};
  justify-content: space-between;
  overflow: auto;

  h3 {
    font-size: ${FONT_SIZE.BASE};
    text-align: center;
    color: ${theme.COLOR.MAIN.GRAY};
    white-space: pre-wrap;
    margin-top: 0px;
    font-family: 'Pretendard-semibold';
    line-height: 30px;
  }
  p {
    font-size: ${FONT_SIZE.BASE};
    font-family: 'Pretendard-regular';
    color: ${theme.COLOR.MAIN.GRAY};
    white-space: pre-wrap;
  }
`;
const BigModalContentContainer = styled.div`
  width: 360px;
  height: 370px;
  z-index: 99;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: white;
  ${theme.ALIGN.COLUMN_CENTER};
  justify-content: space-between;
  overflow: auto;
  h3 {
    font-size: ${FONT_SIZE.BASE};
    color: ${theme.COLOR.MAIN.GRAY};
    white-space: pre-wrap;
    margin-left: 30px;
    align-self: flex-start;
  }
  p {
    font-size: ${FONT_SIZE.BASE};
    font-family: 'Pretendard-regular';
    color: ${theme.COLOR.MAIN.GRAY};
    white-space: pre-wrap;
  }
`;

const CloseImg = styled.img`
  width: 30px;
  align-self: flex-start;
  margin: 10px 0 0 15px;
  cursor: pointer;
`;

const SquareDoubleButton = styled.button`
  font-size: ${FONT_SIZE.BASE};
  font-family: 'Pretendard-regular';
  border: none;
  padding: 15px;
  background-color: ${theme.COLOR.MAIN.WHITE};
  width: 50%;
  border-top: 1px solid #eeeeee;
  cursor: pointer;
`;
const RoundDoubleButton = styled.button`
  font-size: ${FONT_SIZE.SM};
  border-radius: 30px;

  font-weight: 100;
  width: 40%;
  background-color: ${theme.COLOR.MAIN.WHITE};
  padding: 10px 10px;
  border: 2px solid ${theme.COLOR.MAIN.MEDIUM_GREEN};
  margin: 0 10px 20px;

  ${theme.ALIGN.ROW_CENTER}
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  width: 100%;
  ${theme.ALIGN.ROW_CENTER}
`;

const ModalButton = styled.button`
  font-size: ${FONT_SIZE.BASE};
  color: #ff8686;
  font-family: 'Pretendard-regular';
  border: none;
  padding: 15px;
  background-color: #ffffff;
  width: 100%;
  border-top: 1px solid #eeeeee;
  cursor: pointer;
`;

const ModalInput = styled.input`
  width: 90%;
  border: 1px solid #eeeeee;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
`;

export {
  ModalContentContainer,
  BigModalContentContainer,
  ModalOverlay,
  CloseImg,
  SquareDoubleButton,
  ButtonContainer,
  RoundDoubleButton,
  ModalButton,
  ModalInput,
};
