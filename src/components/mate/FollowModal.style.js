import styled from 'styled-components';

import closeButton from '/images/mate/modal-close.svg';
import theme from '@/theme';

const ModalBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  ${theme.ALIGN.COLUMN_CENTER};
  z-index: 3;
`;

const ModalContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  width: 340px;
  height: 160px;
  border-radius: 10px;
  border-color: transparent;
  background: ${theme.COLOR.MAIN.WHITE};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 280px;
    height: 120px;
  }
`;

const ModalCloseButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  background-image: url(${closeButton});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 14px;
  left: 14px;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 24px;
    height: 24px;
    top: 10px;
    left: 10px;
  }
`;

const ModalContents = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

export { ModalBase, ModalContainer, ModalCloseButton, ModalContents };
