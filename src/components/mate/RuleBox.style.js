import styled from 'styled-components';

import AddUserIcon from '/images/add-user.svg';
import theme from '@/theme';

const InputContainer = styled.div`
  position: relative;
  width: 293px;
  height: 526px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 10px;
  background-color: #fdfdfd;
  margin-top: 10px;
  margin-bottom: 32px;
`;

const Topcontainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 100%;
  margin: 20px 0;
`;

const LineWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const StyledTitle = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  width: 200px;
  height: 24px;
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
  position: absolute;
  right: 10px;
  margin-left: 13px;
  width: 20px;
  height: 20px;
  border: none;
  background-image: url(${AddUserIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  cursor: pointer;
`;

const Participant = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 200px;
  margin-top: 10px;
  height: 13px;
`;

const InputBox = styled.textarea`
  border: none;
  width: 100%;
  height: 430px;
  border-top: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
  padding: 5px;

  &:focus {
    outline: none;
  }
`;

export {
  InputContainer,
  Topcontainer,
  LineWrapper,
  StyledTitle,
  PlusButton,
  Participant,
  InputBox,
};
