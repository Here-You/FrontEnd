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
  margin-top: 20px;
`;

const Title = styled.div`
  font-family: 'Pretendard-bold';
  font-size: 18px;
  color: ${theme.COLOR.MAIN.BLACK};
`;
const Location = styled.div`
  font-family: 'Pretendard-semibold';
  font-size: 18px;
  color: ${theme.COLOR.MAIN.GRAY};
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  margin-top: 20px;
  padding: 0 0px;

  p {
    font-size: ${FONT_SIZE.LG};
    color: ${theme.COLOR.MAIN.BLACK};
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
  Location,
};
