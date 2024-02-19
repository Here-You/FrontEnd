import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const MateLookContainer = styled.div`
  height: 100%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
`;

const Title = styled.div`
  padding: 10px;
  font-family: 'Pretendard';
  ${theme.ALIGN.ROW_CENTER};
  font-size: ${FONT_SIZE.LG};
  color: ${theme.COLOR.MAIN.BLACK};
  white-space: nowrap;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 5px 0px; */
  border-radius: 10px;

  h3 {
    font-family: 'Pretendard-semibold';
    font-size: ${FONT_SIZE.LG};
    padding: 0 5px;
    color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
    width: 100%;

    h3 {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  margin-top: 10px;
  padding: 10px 0px;

  p {
    font-size: ${FONT_SIZE.LG};
    color: ${theme.COLOR.MAIN.BLACK};
  }

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  }
`;

const MateContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
`;

const AlertMessage = styled.div`
  display: flex;
  align-items: center;
  white-space: pre-wrap;

  p {
    padding: 20px;
    font-family: 'Pretendard-bold';
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: ${FONT_SIZE.LG};
    font-weight: bold;
  }

  p span {
    color: ${theme.COLOR.MAIN.GREEN};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    p {
      padding: 20px;
      color: ${theme.COLOR.MAIN.BLACK};
      font-size: ${FONT_SIZE.XL};
      font-weight: bold;
    }
  }
`;

const AlertContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: pre-wrap;
  gap: 30px;
  border-radius: 10px;
  width: 100%;
  min-width: 300px;
  padding: 30px;
  background-color: ${theme.COLOR.MAIN.WHITE};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-decoration: none;

  cursor: pointer;

  p {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: ${FONT_SIZE.XL};
    font-weight: 900;
  }

  &:hover {
    scale: calc(1.1);
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    p {
      color: ${theme.COLOR.MAIN.BLACK};
      font-size: ${FONT_SIZE.BASE};
      font-weight: 900;
    }
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;

  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  padding: 10px;
  border-radius: 40px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 50px;
    height: 50px;
  }
`;

const AlertLayout = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 85%;

  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  gap: 40px;
`;

const MateContentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
  width: 100%;
  margin-top: 50px;

  p {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: ${FONT_SIZE.XL};
    font-family: 'Pretendard-regular';
  }

  p span {
    color: ${theme.COLOR.MAIN.HEAVY_GREEN};
    font-size: ${FONT_SIZE.XL};
    font-family: 'Pretendard-regular';
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export {
  Title,
  BoxContainer,
  MateLookContainer,
  CenteredContainer,
  MateContainer,
  AlertMessage,
  AlertContainer,
  Icon,
  AlertLayout,
  MateContentContainer,
  Image,
};
