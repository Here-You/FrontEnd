import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const MateLookContainer = styled.div`
  gap: 10px;
`;

const Title = styled.h1`
  padding: 0 25px;
  font-size: ${FONT_SIZE.BASE};
  color: ${theme.COLOR.MAIN.GRAY};
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  margin-top: 20px;
  padding: 0 20px;
`;

const MateContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
`;

const MateBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 1000px;
  height: 250px;
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 20px;
  gap: 10px;
`;

const MateDescriptionBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  padding: 10px;
  margin-left: 15px;
  margin-top: 60px;
  gap: 10px;
`;

const TextBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;

  h1 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const MateImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.8rem;
  }
`;

const SignatureImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

export {
  Title,
  MateLookContainer,
  CenteredContainer,
  MateContainer,
  MateDescriptionBox,
  MateBox,
  TextBox,
  MateImage,
  SignatureContainer,
  SignatureImage,
  ImageContainer,
};
