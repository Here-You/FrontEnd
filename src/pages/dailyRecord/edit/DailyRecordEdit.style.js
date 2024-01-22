import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-top: 30px;
  gap: 20px;
`;

const PreviewImage = styled.img`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  cursor: pointer;
`;

const ImageUploadButton = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const ImageInput = styled.input`
  display: none;
  color: transparent;
`;

const DateContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const YearText = styled.p`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.LG};
  font-weight: 600;
`;

const DateText = styled(YearText)`
  font-size: ${FONT_SIZE.THREE_XL};
  font-weight: 800;
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 43px 40px;
  width: 550px;
  height: 930px;
  border: 1px solid #21b69c;
  border-radius: 20px;
`;

const RecordImageContainer = styled.div`
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  width: 300px;
  height: 300px;
  border-radius: 20px;
`;

const WeatherContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  width: 100%;
`;

const LocationText = styled.textarea`
  width: 100%;
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
`;

const TitleText = styled.input`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.THREE_XL};
  font-weight: 700;
  text-align: center;
  border: none;

  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
`;

const WeatherText = styled.input`
  color: #1b9c85;
  font-size: ${FONT_SIZE.SM};
  font-weight: 700;
  text-align: center;
  border: none;

  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
`;

const FeelingText = styled(WeatherText)``;

const ContentText = styled.textarea`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.LG};
  font-weight: 700;
  width: 100%;
  height: 500px;
  text-align: center;
  border: none;
  resize: none;

  &::placeholder {
    color: #aaa;
    font-size: 23px;
  }
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
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
  FeelingText,
  WeatherText,
  WeatherContainer,
  ContentText,
  ImageUploadButton,
  ImageInput,
  PreviewImage,
};
