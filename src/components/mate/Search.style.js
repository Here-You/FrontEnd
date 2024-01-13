import styled from 'styled-components';

import searchIcon from '@/assets/images/search.svg';
import theme from '@/theme';

const ParentConatiner = styled.div`
  ${theme.ALIGN.ROW_CENTER}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 295px;
  height: 42.074px;

  border-radius: 13.941px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  background: #fdfdfd;

  margin-top: 38px;
`;

const InputContainer = styled.input`
  border: none;
  background: none;
  padding-left: 17.85px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.57);
    font-family: Inter;
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

export { ParentConatiner, SearchContainer, InputContainer, SearchButton };
