import styled from 'styled-components';

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
  width: 400px;
  height: 240px;
  border-radius: 15px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.WHITE};

  /* span {
    color: ${theme.COLOR.MAIN.GRAY};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  } */

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 277px;
    height: 174px;
    border-radius: 10px;
  }
`;

const SpanContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: absolute;
  top: 72px;
  gap: 10px;

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span:last-child {
    font-weight: 500;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    top: 62px;
    gap: 7px;
    border-radius: 10px;
    font-size: 12px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const OkButton = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  color: #ff8686;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

export {
  ModalBase,
  ModalContainer,
  SpanContainer,
  ButtonContainer,
  CancelButton,
  OkButton,
};
