import styled from 'styled-components';

import searchIcon from '/images/explore/searchIcon.svg';
import theme from '@/theme';

const SearchContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const InputContainer = styled.form`
  ${theme.ALIGN.ROW_CENTER};

  width: 295px;
  height: 42.074px;
  border-radius: 13.941px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  background: #fdfdfd;
  margin-top: 10px;
`;

const InputText = styled.input`
  border: none;
  background: none;
  padding-left: 17.85px;
  width: 100%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.57);
    font-family: 'Inter';
    font-size: 12.268px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.074px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 41.824px;
  height: 42.074px;
  padding-right: 0;
  border-radius: 0px 13.941px 13.941px 0px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.GREEN};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

const Text = styled.h1`
  font-size: 16px;
  color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  padding: 30px;
`;

export { SearchContainer, InputContainer, InputText, SearchButton, Text };
