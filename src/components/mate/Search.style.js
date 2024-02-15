import styled from 'styled-components';

import searchIcon from '/images/mate/mateSearch.svg';
import theme from '@/theme';

const SearchContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
`;

const InputContainer = styled.form`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 70%;
  min-width: 320px;
  max-width: 450px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  background: #fdfdfd;

  ${theme.WINDOW_SIZE.MOBILE} {
    height: 45px;
  }
`;

const InputText = styled.input`
  border: none;
  background: none;
  padding-left: 15px;
  width: 100%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.57);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  min-width: 41px;
  max-width: 50px;
  width: 12%;
  height: 50px;
  padding-right: 0;
  border-radius: 0px 15px 15px 0px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.GREEN};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;

  ${theme.WINDOW_SIZE.MOBILE} {
    height: 45px;
  }
`;

export { SearchContainer, InputContainer, InputText, SearchButton };
