import styled from 'styled-components';

import AddUserIcon from '/images/add-user.svg';
import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const InputContainer = styled.div`
  width: 293px;
  height: 526px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 10px;
  background-color: #fdfdfd;
  margin-top: 10px;
  margin-bottom: 32px;
`;

const Topcontainer = styled.div`
  width: 100%;
  height: 64px;
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
`;

const SortButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 17px;
  position: relative;
  border: none;
  background-color: transparent;
`;

const StyledTitle = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  width: 160px;
  height: 24px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;

const PlusButton = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 17px;
  border: none;
  background-image: url(${AddUserIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
`;

const InputBox = styled.textarea`
  border: none;
  width: 100%;
  height: 450px;
  border-top: 1px solid ${theme.COLOR.MAIN.GREEN};
  padding: 5px;

  &:focus {
    outline: none;
  }
`;

export {
  CenteredContainer,
  InputContainer,
  Topcontainer,
  SortButton,
  StyledTitle,
  PlusButton,
  InputBox,
};
