import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const HeaderWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 100%;
  padding: 20px;
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

const ImageContainer = styled.div`
  margin-top: 40px;
  ${theme.ALIGN.ROW_CENTER};

  p {
    margin-left: 20px;
    font-size: ${FONT_SIZE.THREE_XL};
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin-left: -30px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  ${theme.ALIGN.COLUMN_CENTER}
  gap: 12px;
`;

const Button = styled.button`
  ${theme.ALIGN.ROW_CENTER};
  background-color: ${theme.COLOR.MAIN.GREEN};
  border: none;
  width: 400px;
  height: 60px;
  color: ${theme.COLOR.MAIN.WHITE};
  border-radius: 30px;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  font-size: ${FONT_SIZE.XL};

  &:hover {
    scale: 0.9;
  }
`;

const CancelButton = styled.button`
  ${theme.ALIGN.ROW_CENTER};
  background-color: ${theme.COLOR.MAIN.WHITE};
  border: 1px solid ${theme.COLOR.MAIN.GRAY};
  width: 400px;
  height: 60px;
  color: ${theme.COLOR.MAIN.GREEN};
  border-radius: 30px;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  font-size: ${FONT_SIZE.XL};

  &:hover {
    scale: 0.9;
  }
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
  ImageContainer,
  ImageWrapper,
  ButtonContainer,
  CancelButton,
};
