import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 10px;
`;

const PreviewImage = styled.img`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 200px;
    height: 200px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100px;
    height: 100px;
  }
`;

const DateContainer = styled.div`
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const YearText = styled.p`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.LG};
  font-weight: 600;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

const DateText = styled(YearText)`
  font-size: ${FONT_SIZE.THREE_XL};
  font-weight: 800;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.LG};
  }
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 43px 40px;
  width: 550px;
  border: 1px solid #21b69c;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 23px 20px;
    width: 150px;
    min-width: 320px;
    border-radius: 20px;
  }
`;

const RecordImageContainer = styled.div`
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  width: 300px;
  height: 300px;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`;

const WeatherContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  width: 100%;
`;

const LocationText = styled.p`
  height: 50px;
  color: #333;
  font-size: ${FONT_SIZE.SM};
  font-weight: 400px;
  text-align: center;
  border: none;
  resize: none;

  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 100%;
    height: 40px;
    font-size: ${FONT_SIZE.SM};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
    height: 40px;
    font-size: ${FONT_SIZE.XS};
  }
`;

const TitleText = styled.p`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.THREE_XL};
  font-weight: 700;
  text-align: center;
  border: none;

  &::placeholder {
    color: #aaa;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.LG};
    }
  }
  &:focus {
    outline: none;
  }

  @media ${theme.WINDOW_SIZE.TABLET} {
    font-size: ${FONT_SIZE.LG};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.LG};
  }
`;

const ContentText = styled.p`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.LG};
  font-weight: 700;
  width: 100%;
  height: 350px;
  text-align: center;
  border: none;
  resize: none;
  white-space: pre-wrap;
  overflow: scroll;

  &::placeholder {
    color: #aaa;
    font-size: 23px;

    @media ${theme.WINDOW_SIZE.TABLET} {
      font-size: ${FONT_SIZE.SM};
    }

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.SM};
    }
  }
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${theme.WINDOW_SIZE.TABLET} {
    font-size: ${FONT_SIZE.SM};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

const Icon = styled.img`
  width: 30px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  border-radius: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 20px;
  }
`;

const AddButton = styled(Link)`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 0;
  margin-left: auto;
  background-color: #e8f6ef;
  text-align: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: sticky;
  bottom: 0px;
  right: 30px;

  cursor: pointer;
  z-index: 1;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 50px;
    height: 50px;
    bottom: 30px;
    right: 20px;
  }
`;

const PenIcon = styled.img`
  width: 25px;
  height: 25px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 20px;
    height: 20px;
  }
`;

export {
  Container,
  DateContainer,
  RecordContainer,
  YearText,
  DateText,
  RecordImageContainer,
  TitleText,
  LocationText,
  WeatherContainer,
  ContentText,
  PreviewImage,
  Icon,
  AddButton,
  PenIcon,
};
