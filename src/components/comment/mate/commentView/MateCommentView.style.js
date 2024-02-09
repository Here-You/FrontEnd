import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';

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

const CommentContentContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  CommentContentContainer,
  LeftContent,
  Icon,
};
