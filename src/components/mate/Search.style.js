import styled from 'styled-components';

import searchIcon from '/images/mate/mateSearch.svg';
import theme from '@/theme';

const SearchContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-bottom: 38px;
`;

const InputContainer = styled.form`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 295px;
  height: 42.074px;
  border-radius: 13.941px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  background: #fdfdfd;
`;

const InputText = styled.input`
  border: none;
  background: none;
  padding-left: 17.85px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.57);
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

export { SearchContainer, InputContainer, InputText, SearchButton };
