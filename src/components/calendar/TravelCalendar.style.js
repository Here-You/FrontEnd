import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const HighlightedElement = styled.abbr`
  border: 2px solid ${({ randomColor }) => randomColor} !important;
  background-color: ${({ randomColor }) => randomColor};
  color: white;
  font-size: 22px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 10px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 40px;

  @media (max-width: 600px) {
    width: 280px;
  }
`;

const Button = styled.button`
  width: 200px;
  background-color: #ffffff;
  padding: 10px;
  border: ${props =>
    props.$clicked ? `2px solid ${theme.COLOR.MAIN.GREEN}` : 'none'};
  color: ${props =>
    props.$clicked ? `${theme.COLOR.MAIN.GREEN}` : `${theme.COLOR.MAIN.GRAY}`};
  font-size: ${FONT_SIZE.SM};
  font-weight: ${props => (props.$clicked ? 'bold' : 'none')};
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.COLOR.MAIN.GREEN};
    background: ${theme.COLOR.MAIN.GREEN};
    color: ${theme.COLOR.MAIN.WHITE};
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 20px;
  gap: 120px;
  margin-bottom: 20px;

  h1 {
    color: #1c1c1c;
    font-size: 131px;
    font-style: italic;
    font-family: bold;
    font-weight: 900;
    margin: 0;
  }

  @media (max-width: 600px) {
    gap: 120px;
    h1 {
      font-size: 50px;
    }
  }
`;

const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(90deg);
  margin: 0;
  -ms-transform: rotate(90deg); // IE9
  -webkit-transform: rotate(90deg); // Chrome Safari Opera

  color: #1c1c1c;
  font-size: 15px;
  font-weight: bold;
`;
const CircleWrapper = styled.div`
  display: flex;
  font-family: 'Pretenard-bold';
  h1 {
    font-size: 30px;
  }
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
`;

const HomeContentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 40px;
`;

const SchedulesContainer = styled.div`
  max-height: 400px;

  padding: 0 30px;

  &::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.COLOR.MAIN.LIGHT_GRAY};
  }
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  padding: 20px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  border-radius: 10px;
`;

const JouneyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: ${FONT_SIZE.LG};
    font-family: 'Pretendard-semibold';
  }

  h3 {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: ${FONT_SIZE.SM};
    font-family: 'Pretendard-semibold';
  }

  h3 span {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: ${FONT_SIZE.SM};
    font-family: 'Pretendard-semibold';
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    p {
      font-size: ${FONT_SIZE.BASE};
    }

    h3 {
      font-size: ${FONT_SIZE.XS};
    }

    h3 span {
      font-size: ${FONT_SIZE.XS};
    }
  }
`;

const Image = styled.img`
  width: 15px;
`;

const CalendarContainer = styled.div`
  position: relative;
  color: black;
`;

const PrevBtn = styled.button`
  position: absolute;
  background: none;
  border: none;
  font-size: 20px;
  left: 0;

  @media (min-width: 768px) {
    position: absolute;
    font-size: 20px;
    right: 20px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    font-size: 20px;
    right: 30px;
  }
`;

const NextBtn = styled.button`
  position: absolute;
  background: none;
  border: none;
  font-size: 20px;
  right: 0;

  @media (min-width: 768px) {
    position: absolute;
    font-size: 20px;
    left: 20px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    font-size: 20px;
    left: 30px;
  }
`;

export {
  HighlightedElement,
  Wrapper,
  Button,
  ButtonContainer,
  HeaderWrapper,
  FontWrapper,
  CircleWrapper,
  Circle,
  HomeContentContainer,
  SchedulesContainer,
  IntroductionContainer,
  CalendarContainer,
  JouneyInfoContainer,
  Image,
  PrevBtn,
  NextBtn,
};
