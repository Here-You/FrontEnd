import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(7px);
`;
const ModalContent = styled.div`
  width: 360px;
  height: 240px;
  z-index: 99;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  overflow: auto;
`;

const CloseImg = styled.img`
  width: 20px;
  align-self: flex-start;
  margin-bottom: 50px;
`;

const ModalTitle = styled.div`
  font-size: ${FONT_SIZE.BASE};
  font-family: 'Pretendard-regular';
  color: ${theme.COLOR.MAIN.GRAY};
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
`;

const ModalInput = styled.input`
  width: 90%;
  border: 1px solid #EEEEEE;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
`;
export {
  ModalContent,
  ModalOverlay,
  CloseImg,
  ModalTitle,
  ModalButton,
  ModalInput,
};
