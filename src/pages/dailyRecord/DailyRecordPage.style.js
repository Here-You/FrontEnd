import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: translate3d(-10%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const slideAnimationReverse = keyframes`
  0% {
    opacity: 0.5;
    transform: translate3d(10%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const DateText = styled.p`
  color: #333;
  font-size: 20px;
  font-weight: 600;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  gap: 40px;
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 43px 40px;
  min-width: 550px;
  width: 100%;
  height: 930px;
  border: 1px solid #21b69c;
  border-radius: 30px;
`;

const MainRecordContainer = styled(RecordContainer)`
  position: relative;
`;

const RecordContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  min-width: 550px;
  width: 100%;

  &.slide-left {
    animation: ${slideAnimation} 0.55s;
  }
  &.slide-right {
    animation: ${slideAnimationReverse} 0.55s;
  }
`;

const RightButton = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;
  bottom: 400px;
  left: 635px;
  cursor: pointer;

  &:hover {
    width: 40px;
    height: 40px;
  }
`;

const LeftButton = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;
  bottom: 400px;
  right: 635px;
  cursor: pointer;

  &:hover {
    width: 40px;
    height: 40px;
  }
`;

const PreviewImage = styled.img`
  display: flex;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
`;

const LocationText = styled.p`
  display: flex;
  height: 50px;
  color: #333;
  font-size: 15px;
  font-weight: 400px;
  text-align: center;
  white-space: pre-wrap;
`;

const TitleText = styled.p`
  color: black;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  white-space: pre-wrap;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 350px;
`;

const WeatherText = styled.p`
  color: #1b9c85;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

const FeelingText = styled(WeatherText)``;

const ContentText = styled.p`
  color: black;
  font-size: 17px;
  font-weight: 700;
  width: 100%;
  height: 390px;
  overflow: scroll;
  text-align: center;
  white-space: pre-wrap;
`;

export {
  Container,
  DateText,
  SlideContainer,
  RecordContainer,
  MainRecordContainer,
  RecordContentsContainer,
  RightButton,
  LeftButton,
  PreviewImage,
  LocationText,
  TitleText,
  FeelingText,
  ContentText,
  WeatherContainer,
  WeatherText,
};
