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
  position: relative;
  display: flex;
  flex-direction: row;

  position: sticky;
  bottom: 20px;
  margin-right: -80px;

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
`;

const AddButton = styled.button`
  position: absolute;
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 0 0 5px 0;
  width: 50px;
  height: 50px;
  top: 10px;
  left: 290px;

  text-align: center;
  background-color: #e8f6ef;
  border: none;
  border-radius: 50%;
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.FOUR_XL};

  cursor: pointer;
  transform: ${({ $isClicked }) => ($isClicked ? 'rotate(-45deg)' : 'none')};
  transition: transform 0.3s ease;
`;

const VerticalLine = styled.p`
  visibility: ${props => (props.$isClicked ? 'visible' : 'hidden')};
  position: absolute;
  top: 25px;
  left: 150px;
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.XL};
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
