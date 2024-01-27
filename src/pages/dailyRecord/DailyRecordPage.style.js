import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

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
  ${theme.ALIGN.COLUMN_CENTER};
  overflow: hidden;
  gap: 20px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    gap: 0px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 100%;
    gap: 0px;
  }

  @media screen and (min-height: 680px) {
    gap: 20px;
  }
`;

const DateText = styled.p`
  color: #333;
  font-size: ${FONT_SIZE.XL};
  font-weight: 600;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  gap: 40px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 20px;
  }
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 43px 40px;
  min-width: 550px;
  width: 100%;
  height: 820px;
  border: 1px solid #21b69c;
  border-radius: 30px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    padding: 43px 40px;
    width: 100%;
    height: 680px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 23px 20px;
    width: 150px;
    height: 430px;
    min-width: 320px;
    border-radius: 20px;
  }
`;

const MainRecordContainer = styled(RecordContainer)`
  position: relative;
`;

const RecordContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 550px;
  width: 100%;

  &.slide-left {
    animation: ${slideAnimation} 0.55s;
  }
  &.slide-right {
    animation: ${slideAnimationReverse} 0.55s;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 10px;
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

  @media ${theme.WINDOW_SIZE.TABLET} {
    bottom: 300px;
    right: 450px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    bottom: 200px;
    left: 310px;
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

  @media ${theme.WINDOW_SIZE.TABLET} {
    bottom: 300px;
    right: 640px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    bottom: 200px;
    right: 310px;
  }
`;

const PreviewImage = styled.img`
  display: flex;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 180px;
    height: 180px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100px;
    height: 100px;
  }
`;

const LocationText = styled.p`
  display: flex;
  height: 30px;
  color: #333;
  font-size: ${FONT_SIZE.SM};
  font-weight: 400px;
  text-align: center;
  white-space: pre-wrap;

  @media ${theme.WINDOW_SIZE.TABLET} {
    height: 35px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 20px;
    font-size: ${FONT_SIZE.XS};
  }
`;

const TitleText = styled.p`
  color: black;
  font-size: ${FONT_SIZE.THREE_XL};
  font-weight: 700;
  text-align: center;
  white-space: pre-wrap;

  @media ${theme.WINDOW_SIZE.TABLET} {
    font-size: ${FONT_SIZE.TWO_XL};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 350px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 5px;
    width: 150px;
  }
`;

const WeatherText = styled.p`
  color: #1b9c85;
  font-size: ${FONT_SIZE.SM};
  font-weight: 700;
  text-align: center;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.XS};
  }
`;

const FeelingText = styled(WeatherText)``;

const ContentText = styled.p`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.BASE};
  font-weight: 700;
  width: 100%;
  height: 330px;
  overflow: scroll;
  text-align: center;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  @media ${theme.WINDOW_SIZE.TABLET} {
    font-size: ${FONT_SIZE.SM};
    width: 100%;
    height: 260px;
  }
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.XS};
    width: 280px;
    height: 200px;
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
  bottom: 80px;
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
  AddButton,
  PenIcon,
};
