import styled, { keyframes } from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
  position: absolute;
  bottom: 0px;
  left: 215px;
  height: 20px;
  width: 20px;
  border: 1px solid ${theme.COLOR.MAIN.MEDIUM_GREEN};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

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
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 200px;
    height: 200px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100px;
    height: 100px;
  }
`;

const ImageInput = styled.input`
  display: none;
  color: transparent;
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

const LocationText = styled.textarea`
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

const TitleText = styled.input`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.THREE_XL};
  font-weight: 700;
  text-align: center;
  border: none;
  padding: 0 5px;

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

const ContentText = styled.textarea`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.LG};
  font-weight: 700;
  width: 100%;
  height: 350px;
  text-align: center;
  border: none;
  resize: none;

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

const UploadButton = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  position: absolute;
  height: 30px;
  width: 50px;
  padding: 10px;

  bottom: 0px;
  left: 250px;

  border: 0;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  font-size: ${FONT_SIZE.BASE};
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 5px;
    left: 130px;
    font-size: ${FONT_SIZE.SM};
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
  ImageInput,
  PreviewImage,
  UploadButton,
  Spinner,
};
