import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const SignatureContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 2px;
`;

const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const TitleContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  font-size: ${FONT_SIZE.XS};
  gap: 10px;
`;

const ButtonContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 2px;
  margin-top: 10px;
  margin-left: 300px;

  font-size: ${FONT_SIZE.SM};

  button {
    background-color: transparent;
    border: none;
    color: red;
    cursor: pointer;
  }

  h3 {
    color: ${theme.COLOR.MAIN.BLACK};
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  ${theme.ALIGN.ROW_CENTER}
  gap: 50px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 3rem;

  cursor: pointer;

  &:hover {
    transform: scale(0.9);
    color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  }
`;

const Image = styled.img`
  width: 50%;
  height: 50%;

  object-fit: cover;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
  margin-top: 20px;

  h3 {
    ${theme.ALIGN.ROW_CENTER}
    gap: 5px;
  }

  p {
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

export {
  TitleContainer,
  ProfileContainer,
  ProfileImg,
  ButtonContainer,
  SignatureContainer,
  ImageContainer,
  Button,
  Image,
  TextContainer,
};
