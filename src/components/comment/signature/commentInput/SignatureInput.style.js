import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  gap: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

const Input = styled.textarea`
  display: flex;
  min-height: 100px;
  max-height: 200px;
  padding: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 10px;
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  resize: none;
  outline: none;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const SubmitButton = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 30px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  outline: none;

  cursor: pointer;
  &:hover {
    background-color: ${theme.COLOR.MAIN.MEDIUM_GREEN};
  }
`;

export { Container, Avatar, Input, SubmitButton, ContentContainer };
