import styled from 'styled-components';
import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const TextAreaContainer = styled.div`
  width: 90%;

  ${theme.ALIGN.COLUMN_CENTER}

  p {
    align-self: flex-start;
    font-size: ${FONT_SIZE.XL};
    margin: 30px 10px 10px;
  }
`;
const NickNameTextArea = styled.textarea`
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 10px;
  font-size: ${FONT_SIZE.XL};
  padding: 10px;
  width: 100%;
  height: 60px;
  resize: none;
`;
const IntroTextArea = styled.textarea`
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  font-size: ${FONT_SIZE.XL};
  height: 230px;
  resize: none;
`;

const StoreButton = styled.button`
    background-color: ${theme.COLOR.MAIN.GREEN};
    border: none;
    width: 50%;
    padding: 20px;
    color: white;
    margin-top: 60px;
    border-radius: 35px;
    margin-bottom: 10px;
`


export { NickNameTextArea, TextAreaContainer, IntroTextArea,StoreButton };
