import styled from 'styled-components';

import addIcon from '/images/add-user.svg';
import theme from '@/theme';

const ModalBase = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  z-index: 3;
`;

const ModalContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 277px;
  height: 339px;
  border-radius: 10px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.WHITE};
`;

const WrapContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: absolute;
  top: 38px;

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  button {
    position: absolute;
    right: 20px;
    margin-left: 13px;
    width: 20px;
    height: 20px;
    border: none;
    background-image: url(${AddUserIcon});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 48px;
  border-top: 0.5px solid #eee;
`;

const CancelButton = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  border-right: 0.5px solid #eee;
  background-color: transparent;
  cursor: pointer;

  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const OkButton = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  color: #ff8686;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export {
  ModalBase,
  ModalContainer,
  WrapContainer,
  ButtonContainer,
  CancelButton,
  OkButton,
};
