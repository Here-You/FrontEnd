import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  gap: ${props => (props.$dataLength > 1 ? '0' : '10px')};
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

const CalendarWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const JourneyWrapper = styled.div``;

const MapWrapper = styled.div`
  margin-top: 40px;
`;

export {
  Container,
  CalendarWrapper,
  JourneyWrapper,
  ButtonContainer,
  Button,
  MapWrapper,
};
