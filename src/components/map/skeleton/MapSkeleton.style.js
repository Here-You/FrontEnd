import styled, { keyframes } from 'styled-components';

import theme from '@/theme';

const skeletonGradient = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 0 50px;
  gap: 50px;
  position: relative;
`;

const AddButton = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 0;
  margin: auto;
  border: none;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  position: sticky;
  bottom: 20px;
  margin-right: -80px;

  cursor: pointer;
  z-index: 1;
  align-self: flex-end;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const ButtonContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 40px;
  border-radius: 40px;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const Button = styled.button`
  width: 200px;
  padding: 30px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  animation: ${skeletonGradient} 1.5s infinite;
`;

const CalendarContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  animation: ${skeletonGradient} 1.5s infinite;
`;

const JourneyWrapper = styled.div``;

const MapContainer = styled.div`
  width: 100%;
  height: 900px;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.5s infinite;
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
