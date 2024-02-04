import styled from 'styled-components';

import AddUserIcon from '/images/mate/add-user.svg';
import theme from '@/theme';

const InputContainer = styled.div`
  position: relative;
  width: 500px;
  height: 800px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 20px 20px 0 0;
  background-color: ${theme.COLOR.MAIN.WHITE};
  margin-top: 10px;
  margin-bottom: 32px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 300px;
    height: 530px;
    border-radius: 10px;
  }
`;

const Topcontainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 100%;
  margin: 20px 0 10px 0;
`;

const LineWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 70%;
`;

const StyledTitle = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  width: 100%;
  height: 36px;
  padding: 5px;

  color: #000;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:focus {
    outline: none;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 24px;
    font-size: 16px;
  }
`;

const PlusButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 20px;
  border: none;
  background-image: url(${AddUserIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 20px;
    height: 20px;
  }
`;

const Participant = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  margin-top: 20px;
  height: 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-top: 10px;
    height: 20px;
  }
`;

const ParticipantImg = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: none;
    margin-left: -8px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    img {
      width: 12px;
      height: 12px;
      border-radius: 12px;
      margin-left: -4px;
    }
  }
`;

const ParticipantName = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-left: 10px;

  span {
    color: #aaa;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-left: 6px;

    span {
      font-size: 12px;
    }
  }
`;

const ParticipantOver = styled.img`
  ${theme.ALIGN.ROW_CENTER};
  width: 16px;
  margin-left: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 12px;
    margin-left: 6px;
  }
`;

const InputBox = styled.div`
  border: none;
  width: 100%;
  height: 682px;
  border-top: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
  padding: 5px;
  overflow-y: scroll;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 440px;
  }
`;

const SmallRule = styled.div`
  width: 100%;
  height: auto;
  color: ${theme.COLOR.MAIN.BLACK};
  padding: 5px;
  margin-bottom: 20px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};

  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InputRuleTitle = styled.textarea`
  width: 100%;
  border: none;
  padding: 5px;
  margin-bottom: 5px;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const InputRuleDetail = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 100px;
  border: none;
  padding: 5px;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
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
  SmallRule,
  InputRuleTitle,
  InputRuleDetail,
};
