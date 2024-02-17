import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';
import { IoIosClose } from 'react-icons/io';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%); /* Start from left of the viewport */
  }
  to {
    transform: translateX(0); /* End at original position */
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0); /* Start at original position */
  }
  to {
    transform: translateX(-100%); /* End at left of the viewport */
  }
`;

const Container = styled.div`
  opacity: ${props => (props.$isOpen ? '1' : '0')};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  position: absolute;
  z-index: 5;
  width: 300px;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  position: fixed;
  background-color: ${theme.COLOR.MAIN.WHITE};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  animation: ${props => (props.$isOpen ? slideInAnimation : slideOutAnimation)}
    0.5s ease-in-out; /* Apply appropriate animation */
  animation-fill-mode: forwards;

  @media screen {
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
    padding: 10px 12px 50px 12px;
  }
`;

const TitleContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${props =>
    props.active ? theme.COLOR.MAIN.HEAVY_GREEN : theme.COLOR.MAIN.BLACK};
`;

const Icon = styled.img`
  height: 44px;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: ${FONT_SIZE.XL};
  font-family: ${props =>
    props.$clicked ? 'Pretendard-semibold' : 'Pretendard-regular'};
  color: ${props =>
    props.$clicked
      ? `${theme.COLOR.MAIN.MEDIUM_GREEN}`
      : `${theme.COLOR.MAIN.BLACK}`};
`;

const CloseIcon = styled(IoIosClose)`
  margin-left: auto;
  font-size: ${FONT_SIZE.THREE_XL};
  color: ${theme.COLOR.MAIN.BLACK};
  cursor: pointer;
`;

export { Container, TitleContainer, Icon, Title, CloseIcon };
