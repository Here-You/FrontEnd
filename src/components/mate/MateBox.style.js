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

const MateDescriptionBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ImageContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 300px;
  height: 100%;
  padding: 10px;
  margin-left: 15px;
  margin-top: 60px;
  gap: 10px;
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
  width: 100px;

  p {
    font-size: 0.8rem;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

const SignatureImage = styled.img`
  width: 100%;
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
  MateBox,
  TextBox,
  TextContainer,
  MateImage,
  SignatureContainer,
  SignatureImage,
  ImageContainer,
};
