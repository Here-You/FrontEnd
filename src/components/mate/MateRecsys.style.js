import styled from 'styled-components';

import theme from '@/theme';

const MateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.COLOR.MAIN.HEAVY_GREEN};
  border-radius: 20px;
  height: 230px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const MateDescriptionBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 80%;
  margin-right: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

const MateImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  justify-content: center;

  align-items: center;
`;
const Button = styled.button`
  border: none;
  color: white;
  background-color: ${theme.COLOR.MAIN.GREEN};
  padding: 5px 18px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  width: 120px;

  &:hover {
    transform: scale(0.9);
  }
`;

const Info = styled.div`
  display: flex;

  color: ${theme.COLOR.MAIN.GRAY};
  font-family: 'Pretendard-semibold';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Name = styled.div`
  display: flex;
  color: ${theme.COLOR.MAIN.BLACK};
  font-family: 'Pretendard-bold';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export {
  MateBox,
  MateDescriptionBox,
  MateImage,
  TextBox,
  TextContainer,
  Button,
  Info,
  Name,
  ButtonContainer,
};
