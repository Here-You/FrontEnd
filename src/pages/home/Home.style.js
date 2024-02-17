import styled, { css, keyframes } from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const popAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

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
  bottom: 40px;
  padding: 0 20px;
  margin-left: auto;

  cursor: pointer;
  z-index: 1;
  align-self: flex-end;

  transition: all 0.3s ease;
  ${props =>
    props.$isClicked &&
    css`
      animation: ${popAnimation} 0.3s ease;
    `}
`;

const EditButton = styled.button`
  padding: 20px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  color: ${props =>
    props.$isEditSelected
      ? `${theme.COLOR.MAIN.GREEN}`
      : `${theme.COLOR.MAIN.BLACK}`};

  border-radius: 100px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 10px;
  }
  background-color: ${theme.COLOR.MAIN.WHITE};
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${popAnimation} 0.3s ease;
`;

const WriteButton = styled.button`
  padding: 20px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 100px;
  color: ${props =>
    props.$isCreateSelected
      ? `${theme.COLOR.MAIN.GREEN}`
      : `${theme.COLOR.MAIN.BLACK}`};

  background-color: ${theme.COLOR.MAIN.WHITE};
  cursor: pointer;
  &:hover {
    color: ${theme.COLOR.MAIN.GREEN};
  }
  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 10px;
  }
  transition: all 0.3s ease;
  animation: ${popAnimation} 0.3s ease;
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
  JourneyButtonContainer,
  EditButton,
  WriteButton,
};
