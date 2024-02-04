import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.form`
  width: 90%;

  ${theme.ALIGN.COLUMN_CENTER}
`;
const Input = styled.input`
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 10px;
  font-size: ${FONT_SIZE.XL};
  padding: 10px;
  width: 100%;
  height: 50px;
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
  margin: 30px 10px 10px;
`;

export { Input, Container, StoreButton, ErrorMessage, Title };
