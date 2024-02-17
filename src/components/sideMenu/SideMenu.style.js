import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  position: absolute;
  z-index: 5;
  padding: 100px 12px;
  width: 300px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  position: fixed;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media ${theme.WINDOW_SIZE.TABLET} {
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 50px 12px;
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
  font-family: 'Pretendard-regular';
`;

export { Container, TitleContainer, Icon, Title };
