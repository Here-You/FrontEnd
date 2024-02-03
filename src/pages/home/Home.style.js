import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  gap: ${props => (props.$dataLength > 1 ? '0' : '10px')};
  position: relative;
`;

const ButtonContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 40px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 40px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 200px;
  background-color: #ffffff;
  padding: 20px;
  border: ${props =>
    props.clicked ? `2px solid ${theme.COLOR.MAIN.GREEN}` : 'none'};
  color: ${props =>
    props.clicked ? `${theme.COLOR.MAIN.GREEN}` : `${theme.COLOR.MAIN.GRAY}`};
  font-size: ${FONT_SIZE.SM};
  font-weight: ${props => (props.clicked ? 'bold' : 'none')};
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.COLOR.MAIN.GREEN};
    background: ${theme.COLOR.MAIN.GREEN};
  }
`;

const CalendarContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
`;

const JourneyButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  position: sticky;
  bottom: 40px;
  padding: 0 20px;
  margin-left: auto;

  cursor: pointer;
  z-index: 1;
  align-self: flex-end;
`;

const EditButton = styled.button`
  visibility: ${props => (props.$isClicked ? 'visible' : 'hidden')};

  padding: 25px 30px;
  border-top: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-left: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-bottom: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-right: 0px;

  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;

  background-color: ${theme.COLOR.MAIN.WHITE};
  cursor: pointer;
  &:hover {
    color: ${theme.COLOR.MAIN.GREEN};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 20px 15px;
  }
`;

const WriteButton = styled.button`
  visibility: ${props => (props.$isClicked ? 'visible' : 'hidden')};

  padding: 10px 80px 10px 30px;
  border-top: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-right: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-bottom: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-left: 0px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  background-color: ${theme.COLOR.MAIN.WHITE};
  cursor: pointer;
  &:hover {
    color: ${theme.COLOR.MAIN.GREEN};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 10px 60px 10px 30px;
  }
`;

const AddButton = styled.button`
  position: absolute;
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 0 0 5px 0;
  width: 50px;
  height: 50px;
  top: 10px;
  left: 310px;

  text-align: center;
  background-color: #e8f6ef;
  border: none;
  border-radius: 50%;
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.FOUR_XL};

  cursor: pointer;
  transform: ${({ $isClicked }) => ($isClicked ? 'rotate(-45deg)' : 'none')};
  transition: transform 0.3s ease;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 40px;
    height: 40px;
    left: ${props =>
      props.$browserName === 'safari' || props.$browserName === 'kakaotalk'
        ? '240px'
        : '270px'};
  }
`;

const VerticalLine = styled.p`
  visibility: ${props => (props.$isClicked ? 'visible' : 'hidden')};
  position: absolute;
  top: 25px;
  left: 170px;
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.XL};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    top: 20px;
    left: ${props =>
      props.$browserName === 'safari' || props.$browserName === 'kakaotalk'
        ? '130px'
        : '145px'};
  }
`;

const JourneyWrapper = styled.div``;

const MapContainer = styled.div`
  margin-top: 40px;
`;

export {
  Container,
  CalendarContainer,
  JourneyWrapper,
  ButtonContainer,
  Button,
  MapContainer,
  AddButton,
  JourneyButtonContainer,
  EditButton,
  WriteButton,
  VerticalLine,
};
