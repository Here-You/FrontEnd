import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  gap: 10px;
  padding: 20px;
`;

const CommentInput = styled.textarea`
  display: flex;
  flex: 3;
  padding: 10px;
  border: 2px solid ${theme.COLOR.MAIN.MEDIUM_GREEN};
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.WHITE};
  outline: none;
  resize: none;
`;

const Avatar = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

const SubmitButton = styled.button`
  display: flex;
  max-height: 30px;
  border: 0;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.MEDIUM_GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  padding: 5px;
  outline: none;
  cursor: pointer;
`;

export { Container, CommentInput, Avatar, SubmitButton };
