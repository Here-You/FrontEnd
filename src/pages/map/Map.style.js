import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  gap: ${props => (props.$dataLength > 1 ? '0' : '10px')};
  position: relative;
`;

const AddButton = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 0;
  margin: auto;
  background-color: #e8f6ef;
  border: none;
  text-align: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  color: ${theme.COLOR.MAIN.GREEN};
  font-size: ${FONT_SIZE.FIVE_XL};
  position: sticky;
  bottom: 20px;
  margin-right: -80px;

  cursor: pointer;
  z-index: 1;
  align-self: flex-end;
`;

const ButtonContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 40px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 40px;
`;

const Button = styled.button`
  width: 200px;
  background-color: #ffffff;
  padding: 20px;
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

const CalendarContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const JourneyWrapper = styled.div``;

const MapContainer = styled.div`
  width: 90%;
  margin-top: 40px;
`;

const IntroMessage = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.MEDIUM_GREEN};
  padding: 20px;

  color: ${theme.COLOR.MAIN.WHITE};
  font-size: ${FONT_SIZE.BASE};

  &:hover {
    background-color: ${theme.COLOR.MAIN.HEAVY_GREEN};
    cursor: pointer;
  }
`;

export {
  Container,
  CalendarContainer,
  JourneyWrapper,
  ButtonContainer,
  Button,
  MapContainer,
  AddButton,
  IntroMessage,
};
