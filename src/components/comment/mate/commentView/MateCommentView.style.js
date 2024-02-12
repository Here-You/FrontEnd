import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;

const CommentViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 10px;

  p {
    font-size: ${FONT_SIZE.SM};
  }
`;

const UpdateButton = styled.button`
  border-radius: 10px;
  border: none;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  font-size: 0.5rem;
  padding: 5px 7px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const CommentContentContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
`;

const LeftContent = styled.div`
  display: flex;
  font-size: ${FONT_SIZE.SM};
  min-width: 10%;
  margin-left: auto;
  gap: 5px;
`;

const Avatar = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

const Icon = styled.img`
  display: flex;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export {
  Container,
  Avatar,
  CommentViewContainer,
  UpdateButton,
  CommentContentContainer,
  LeftContent,
  Icon,
};
