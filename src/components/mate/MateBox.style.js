import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const MateBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 300px;
  height: 250px;
  border: 1px solid ${theme.COLOR.MAIN.MEDIUM_GREEN};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
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

const ImageWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 300px;
  height: 100%;
  padding: 10px;
  margin-top: 60px;
  gap: 10px;

  p {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: ${FONT_SIZE.BASE};
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
`;

const TextBox = styled.div`
  width: 200px;
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  h1 {
    font-size: 0.8rem;
    margin-bottom: 3px;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  p {
    font-size: 0.8rem;
    color: ${theme.COLOR.MAIN.GRAY};
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
  width: 200px;
  align-items: center;

  p {
    font-size: 0.8rem;
    display: block;
    text-overflow: ellipsis;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

const SignatureImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  width: 170px;
  height: 180px;
  object-fit: cover;
`;

export {
  MateDescriptionBox,
  MateBox,
  TextBox,
  TextContainer,
  MateImage,
  SignatureContainer,
  SignatureImage,
  ImageContainer,
  Image,
  ImageWrapper,
};
