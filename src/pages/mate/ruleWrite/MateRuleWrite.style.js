import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Wrapper = styled.div`
  width: 80%;
  height: 900px;
  overflow-y: scroll;

  border: 2px solid ${theme.COLOR.MAIN.HEAVY_GREEN};
  border-radius: 20px;
  padding: 20px;
`;

const Header = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;

  h1 {
    ${theme.ALIGN.ROW_CENTER};
  }
`;

const TitleInput = styled.input`
  padding: 20px;
  width: 80%;
  border: none;
  text-align: center;
  font-size: ${FONT_SIZE.TWO_XL};
`;

const PlusSvg = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const MatesContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 2px;
`;

const MatesImages = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ContentBox = styled.div`
  ${theme.ALIGN.ROW_CENTER}
`;

const TextContainer = styled.div`
  position: relative;
`;

const DeleteRuleButton = styled.button`
  position: absolute;
  top: 23px;
  right: -10px;

  width: 30px;
  height: 30px;
  border: none;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const ContentTitleInput = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  font-size: 1rem;
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

const SubmitBtn = styled.button`
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

export {
  Container,
  Wrapper,
  PlusSvg,
  MatesContainer,
  MatesImages,
  Header,
  Content,
  ContentBox,
  TextContainer,
  TitleInput,
  ContentTextInput,
  ContentTitleInput,
  DeleteRuleButton,
  AddButtonWrapper,
  AddQuestionButton,
  SubmitBtn,
};
