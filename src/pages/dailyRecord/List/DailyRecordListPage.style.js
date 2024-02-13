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
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 60px 50px 0 50px;
  gap: 10px;
  height: 100%;
  width: 100%;

  overflow: hidden;
`;

const DateText = styled.p`
  color: #333;
  font-size: ${FONT_SIZE.XL};
  font-weight: 600;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SM};
  }
`;

const MainRecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 23px 20px;
  border: 1px solid #21b69c;
  border-radius: 30px;
`;

const RecordContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  height: 100%;

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
  right: 0px;
  top: 350px;
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
  top: 350px;
  left: 0px;
  cursor: pointer;

  &:hover {
    width: 40px;
    height: 40px;
  }
`;

const PreviewImage = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
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

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.BASE};
  font-weight: 700;
  width: 100%;
  min-height: 200px;
  overflow: scroll;
  text-align: center;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  @media ${theme.WINDOW_SIZE.TABLET} {
    font-size: ${FONT_SIZE.SM};
  }
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.XS};
  }
`;

const AddButton = styled(Link)`
  padding: 20px;
  margin-left: auto;
  background-color: #e8f6ef;
  text-align: center;
  border-radius: 50%;
  position: sticky;
  bottom: 20px;

  cursor: pointer;
  z-index: 1;
`;

const PenIcon = styled.img`
  width: 25px;
  height: 25px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 20px;
    height: 20px;
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

export {
  Container,
  DateText,
  MainRecordContainer,
  RecordContentsContainer,
  RightButton,
  LeftButton,
  PreviewImage,
  LocationText,
  TitleText,
  ContentText,
  WeatherContainer,
  AddButton,
  PenIcon,
  Icon,
};
