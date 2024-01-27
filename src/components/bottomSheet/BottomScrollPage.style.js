import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const HeaderWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const Button = styled.button`
  ${theme.ALIGN.ROW_CENTER};
  background-color: ${theme.COLOR.MAIN.GREEN};
  border: none;
  width: 200px;
  height: 50px;
  color: ${theme.COLOR.MAIN.WHITE};
  border-radius: 20px;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  font-size: ${FONT_SIZE.XL};

  &:hover {
    scale: 0.9;
  }
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Image = styled.img`
  height: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const MarkImage = styled.img`
  height: 40px;
`;

const ListWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin: 20px;
`;

const ListContainer = styled.div`
  color: ${theme.COLOR.MAIN.GREEN};
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 20px;
  width: 90%;
  padding: 20px 40px;
  ${theme.ALIGN.ROW_CENTER};
  gap: 60px;
`;

const ListDescriptionContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
`;

export {
  HeaderWrapper,
  Button,
  HeaderContainer,
  Image,
  MarkImage,
  ListWrapper,
  ListContainer,
  TextContainer,
  ListDescriptionContainer,
};
