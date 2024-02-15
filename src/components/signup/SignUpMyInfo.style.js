import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.form`
  ${theme.ALIGN.COLUMN_CENTER}
`;
const Input = styled.textarea`
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 10px;
  font-size: ${FONT_SIZE.XL};
  padding: 10px;
  width: 100%;
  height: 45px;
  resize: none;
  font-size: 18px;
`;

const StoreButton = styled.button`
  background-color: ${theme.COLOR.MAIN.GREEN};
  border: none;
  width: 70%;
  padding: 16px 20px;
  color: white;
  margin-top: 30px;
  border-radius: 35px;
  margin-bottom: 10px;
  font-size: 18px;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: ${FONT_SIZE.SM};
  margin: 10px 10px 10px;
  align-self: flex-start;
`;
const Title = styled.p`
  align-self: flex-start;
  font-size: ${FONT_SIZE.XL};
  margin: 30px 5px 10px;
`;

const Img = styled.img`
  display: flex;
  width: 80%;
  margin-top: 20%;
`;
export { Input, Container, StoreButton, ErrorMessage, Title, Img };
