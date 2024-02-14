import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Header = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const StyledMyDiary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
    padding: 10px;
  }
`;

const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  background-color: ${theme.COLOR.MAIN.MEDIUM_GREEN};
  padding: 20px;
  border-radius: 20px;

  h1 {
    color: ${theme.COLOR.MAIN.WHITE};
    font-size: 1.4rem;
  }
`;

const DiaryCard = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 5px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const DiaryImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 8px;
  margin-bottom: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 150px;
    width: 150px;
  }
`;

const EmojiContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
`;

const EmojiImage = styled.img`
  height: 40px;
  width: 40px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: ${FONT_SIZE.XL};
  margin-bottom: 5px;
  width: 300px;
  text-align: center;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Subtitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 10px;
  width: 300px;
  text-align: center;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Date = styled.h3`
  font-size: 0.7rem;
  color: ${theme.COLOR.MAIN.BLACK};
`;

const Content = styled.p`
  font-size: 1rem;
  width: 250px;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export {
  Header,
  Container,
  StyledMyDiary,
  DiaryCard,
  DiaryImage,
  EmojiContainer,
  EmojiImage,
  Title,
  Subtitle,
  Date,
  Content,
};
