import styled from 'styled-components';

import searchIcon from '/images/mate/mateSearch.svg';
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
  height: 174px;
  border-radius: 10px;
  border-color: transparent;
  background: ${theme.COLOR.MAIN.WHITE};

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const SearchContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  width: 240px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-top: 16px;
  margin-bottom: 23px;
`;

const UserInput = styled.input`
  position: absolute;
  height: 100%;
  left: 5px;
  padding: 5px;
  border: none;

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 34.793px;
  height: 35px;
  position: absolute;
  right: 0;
  border-radius: 0px 10px 10px 0px;
  border-color: transparent;
  background-color: #eee;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 48px;
  position: absolute;
  bottom: 0px;
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
  SearchContainer,
  UserInput,
  SearchButton,
  ButtonContainer,
  CancelButton,
  OkButton,
};
