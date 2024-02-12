import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  padding: 10px;
  gap: 20px;
  margin-left: ${props => (props.indentationLevel ? '40px' : 0)};
  border-left: ${props => (props.indentationLevel ? '2px solid #ccc' : 'none')};
  padding-left: ${props => (props.indentationLevel ? '10px' : '0')};
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 80%;
  gap: 10px;
  border-bottom: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
`;

const ContentInner = styled.div`
  ${theme.ALIGN.ROW_CENTER}
`;

const Name = styled.p`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.SM};
`;

const Content = styled.p`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.XS};
  white-space: pre-line;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: auto;
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
  ContentContainer,
  ContentInner,
  Name,
  Content,
  NameContainer,
  LeftContent,
  Icon,
};
