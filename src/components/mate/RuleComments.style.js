import styled from 'styled-components';

import searchIcon from '/images/mate/mateSearch.svg';
import theme from '@/theme';

const UnderContainer = styled.div`
  width: 500px;
  height: 200px;
  position: relative;
  background-color: black;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 300px;
    height: 150px;
  }
`;

const LookContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  height: 150px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 105px;
  }
`;

const CommentsWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 40px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 30px;
  }
`;

const CommentUserImg = styled.img`
  width: 25px;
  height: 25px;
  background-color: blue;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 20px;
    height: 20px;
  }
`;

const CommentText = styled.span`
  color: var(--black, #393939);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 10px;
  }
`;

const InputContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 30px;
  }
`;
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: white;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`;
const InputWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  border-radius: 15px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  background: #fdfdfd;
  height: 100%;
  width: 420px;
  position: relative;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 260px;
    border-radius: 10px;
  }
`;
const InputText = styled.input`
  background-color: blue;
  border: none;
  background: none;
  padding-left: 15px;
  height: 100%;
  width: 100%;
  ::placeholder {
    color: rgba(0, 0, 0, 0.57);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
  }
  &:focus {
    outline: none;
  }
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;
const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  width: 50px;
  border-radius: 0px 15px 15px 0px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.GREEN};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 30px;
    border-radius: 0px 10px 10px 0px;
  }
`;
export {
  UnderContainer,
  LookContainer,
  CommentsWrapper,
  CommentUserImg,
  CommentText,
  InputContainer,
  UserImg,
  InputWrapper,
  InputText,
  SubmitButton,
};
