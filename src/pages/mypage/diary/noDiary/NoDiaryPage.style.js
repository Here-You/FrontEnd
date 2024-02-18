import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 70%;
`;

const ContentContainer = styled(Link)`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 40px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    scale: calc(0.9);
  }
`;

const Image = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
`;

const Content = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  white-space: pre-line;
  line-height: 280%;

  p {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: ${FONT_SIZE.XL};
    font-family: 'Pretendard-regular';
  }

  p span {
    color: ${theme.COLOR.MAIN.HEAVY_GREEN};
    font-size: ${FONT_SIZE.XL};
    font-family: 'Pretendard-semibold';
  }
`;

export { Container, Image, Content, ContentContainer };
