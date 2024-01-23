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
`;

const ModalContainer = styled.div`
  width: 277px;
  height: 120px;
  border-radius: 10px;
  border-color: transparent;
  background: ${theme.COLOR.MAIN.WHITE};
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;

  button {
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    background-image: url(${closeButton});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export { ModalBase, ModalContainer };
