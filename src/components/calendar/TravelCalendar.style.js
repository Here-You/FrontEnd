import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
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

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  gap: 120px;
  margin-bottom: 20px;

  h1 {
    color: #1c1c1c;
    font-size: 130px;
    font-style: italic;
    font-family: bold;
    font-weight: 900;
    margin: 0;
  }

  @media (max-width: 600px) {
    gap: 80px;
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
  font-size: 25px;
  font-weight: bold;
`;
const CircleWrapper = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: black;
`;

export {
  Wrapper,
  Button,
  ButtonContainer,
  HeaderWrapper,
  FontWrapper,
  CircleWrapper,
  Circle,
};
