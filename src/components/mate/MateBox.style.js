import styled from 'styled-components';

import theme from '@/theme';

const MateBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 300px;
  height: 250px;
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 20px;
  gap: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  color: ${theme.COLOR.MAIN.GRAY};
  padding: 5px 10px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
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
  ${theme.ALIGN.ROW_CENTER};
  align-items: flex-start;

  h1 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
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
  MateDescriptionBox,
  Button,
  MateBox,
  TextBox,
  TextContainer,
  MateImage,
  SignatureContainer,
  SignatureImage,
  ImageContainer,
};
