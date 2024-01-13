import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const YearText = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

const DateText = styled(YearText)`
  font-size: 28px;
  font-weight: 800;
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 43px 40px;
  width: 550px;
  height: 930px;
  border: 1px solid #21b69c;
  border-radius: 20px;
`;

const RecordImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: ${props => (props.$selectedImg ? '' : '1px solid #21b69c')};
  border-radius: 20px;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const LocationText = styled.textarea`
  width: 100%;
  height: 50px;
  color: #333;
  font-size: 15px;
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
  color: black;
  font-size: 30px;
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
  font-size: 16px;
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
  color: black;
  font-size: 17px;
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

  /* &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #1b9c85;
    border-radius: 100px;
  } */
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
