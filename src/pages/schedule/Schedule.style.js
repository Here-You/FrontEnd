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
  gap: 20px;
`;

const Button = styled.button`
  width: 200px;
  background-color: transparent;
  padding: 20px;
  border: ${props =>
    props.clicked ? `2px solid ${theme.COLOR.MAIN.GREEN}` : 'none'};
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const CalendarContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
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
};
