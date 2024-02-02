import styled from 'styled-components';

import AddUserIcon from '/images/mate/add-user.svg';
import theme from '@/theme';

const InputContainer = styled.div`
  position: relative;
  width: 293px;
  height: 526px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.WHITE};
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
  height: 15px;
`;

const ParticipantImg = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  img {
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: none;
    margin-left: -4px;
  }
`;

const ParticipantName = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 2px;

  span {
    color: #aaa;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const ParticipantOver = styled.img`
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 2px;
`;

const InputBox = styled.div`
  border: none;
  width: 100%;
  height: 430px;
  border-top: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
  padding: 5px;
  overflow-y: scroll;

  div {
    width: 100%;
    height: auto;
    color: ${theme.COLOR.MAIN.BLACK};
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 14px;
    padding: 5px;
    margin-bottom: 20px;
    background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  }
`;

const InputRuleTitle = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  padding: 5px;
  margin-bottom: 5px;

  &:focus {
    outline: none;
  }
`;

const InputRuleDetail = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 100px;
  border: none;
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
  ParticipantImg,
  ParticipantName,
  ParticipantOver,
  InputBox,
  InputRuleTitle,
  InputRuleDetail,
};
