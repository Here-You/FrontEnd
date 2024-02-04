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
  width: 440px;
  height: 480px;
  border-radius: 20px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.WHITE};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 280px;
    height: 300px;
    border-radius: 10px;
  }
`;

const WrapContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: absolute;
  top: 60px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    top: 38px;
  }
`;

const Description = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const SearchContainer = styled.form`
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #eee;
  margin-top: 22px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 200px;
    height: 35px;
    border-radius: 10px;
    margin-top: 16px;
  }
`;

const UserInput = styled.input`
  position: absolute;
  height: 100%;
  left: 5px;
  padding: 5px;
  border: none;

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    outline: none;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  border-radius: 0px 15px 15px 0px;
  border-color: transparent;
  background-color: #eee;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 35px;
    height: 35px;
    border-radius: 0px 10px 10px 0px;
  }
`;

const PlusContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 265px;
  position: absolute;
  top: 160px;
  padding: 20px 0;
  gap: 16px;
  overflow-y: scroll;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 140px;
    top: 110px;
    gap: 10px;
  }
`;

const NoResult = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;

  span {
    color: rgba(0, 0, 0, 0.57);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    span {
      font-size: 12px;
    }
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
  font-size: 14px;
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
  font-size: 14px;
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
  WrapContainer,
  Description,
  SearchContainer,
  UserInput,
  SearchButton,
  PlusContainer,
  NoResult,
  ButtonContainer,
  CancelButton,
  OkButton,
};
