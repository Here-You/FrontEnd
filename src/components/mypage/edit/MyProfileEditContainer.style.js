import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  margin-top: 50px;
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.MAIN.WHITE};
  border-radius: 20px;
  width: 80%;
  height: 400px;
  padding: 10px;
`;

const ContentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  border-bottom: 1px solid gray;
  width: 80%;
  height: 40px;
  padding: 0 10px;
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
    border-radius: 10px;
    transform: scale(0.99);
  }

  h3 {
    font-size: ${FONT_SIZE.BASE};
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

const Image = styled.img`
  font-size: 10px;
`;

export { Container, ContentContainer, Content, Image };
