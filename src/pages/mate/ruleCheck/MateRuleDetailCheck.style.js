import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Wrapper = styled.div`
  width: 80%;
  height: 60vh;
  overflow-y: scroll;
  margin-top: 40px;
  border: 2px solid ${theme.COLOR.MAIN.HEAVY_GREEN};
  border-radius: 20px;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #ccc;
  }
`;

const Header = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;

  h1 {
    ${theme.ALIGN.ROW_CENTER};
  }
`;

const Title = styled.h1`
  padding: 20px 20px 0 20px;
  width: 100%;
  border: none;
  text-align: center;
  font-size: ${FONT_SIZE.TWO_XL};
  word-break: break-all;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.LG};
  }
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
`;

const ProfileBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin: 0px 4px;
  h3 {
    font-size: ${FONT_SIZE.XS};
    white-space: nowrap;
  }
`;

const ProfileImages = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const Content = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 10px;
  gap: 5px;
  align-items: flex-start;
  margin-bottom: 20px;

  p {
    margin-top: 20px;
    color: ${theme.COLOR.MAIN.GRAY};

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.SM};
    }
  }

  h3 {
    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.BASE};
    }
  }
`;

const ContentTextInput = styled.textarea`
  width: 80%;
  padding: 9px;
  border: none;
  resize: none;
  font-size: 0.8rem;
  color: ${theme.COLOR.MAIN.GRAY};
`;

const AddButtonWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
`;

const AddQuestionButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const UpdateBtn = styled.button`
  border: none;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  background-color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  color: white;
  font-size: ${FONT_SIZE.XL};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px 40px;
`;

export {
  Container,
  Wrapper,
  ProfileBox,
  ProfileContainer,
  ProfileImages,
  Header,
  Content,
  TextContainer,
  Title,
  ContentTextInput,
  AddButtonWrapper,
  AddQuestionButton,
  UpdateBtn,
  CommentsContainer,
};
