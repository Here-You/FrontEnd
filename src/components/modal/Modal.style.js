import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0px;
  z-index: 50;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background-color: rgb(82 82 82 / 0.7);

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 10px;
  }
`;

const ModalLayout = styled.div`
  position: relative;
  width: 600px;
  max-height: 100vh;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
  }
`;

const ModalContainer = styled.div`
  height: 100%;
  transition-duration: 300ms;

  transform: ${props =>
    props.$showModal ? 'translateY(0px)' : 'transform: translateY(100%)'};
  opacity: ${props => (props.$showModal ? 1 : 0)};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;

  border-width: 0px;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  outline: 2px solid transparent;
  outline-offset: 2px;

  background-color: ${theme.COLOR.MAIN.WHITE};

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const CloseContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  padding: 2rem 2rem 0 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  left: 1rem;
  padding: 1rem;
  border-width: 0px;

  background-color: transparent;
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.LG};

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  z-index: 22;
`;

const Title = styled.p`
  font-size: ${FONT_SIZE.LG};
  font-weight: 600;
  color: ${theme.COLOR.MAIN.BLACK};
`;

const BodyLayout = styled.div`
  position: relative;
  padding: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
`;

const Button = styled.button`
  width: 100%;
  padding: 1.5rem;
  border-top: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
  border-left: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
  border-right: 1px solid ${theme.COLOR.MAIN.LIGHT_GRAY};
  border-bottom: 0px;

  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  color: ${props => props.buttonColor};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${theme.COLOR.MAIN.GREEN};
  }
`;

export {
  Container,
  ModalLayout,
  ModalContainer,
  ContentContainer,
  CloseContainer,
  CloseButton,
  Title,
  BodyLayout,
  ButtonContainer,
  Button,
};
