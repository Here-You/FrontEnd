import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const SignatureContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 90%;
  margin: auto;
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 80%;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 2px;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  }
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileDesc = styled.div`
  margin-left: 10px;
  font-size: 1rem;

  date {
    font-size: 0.8rem;
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

const FollowButton = styled.button`
  color: ${theme.COLOR.MAIN.WHITE};
  background-color: ${theme.COLOR.MAIN.GREEN};
  padding: 2px 10px;
  border: none;
  border-radius: 10px;
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
`;

const Button = styled.button`
  border: none;
  font-size: 3rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
    color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  }
`;

const Image = styled.img`
  width: 300px;
  height: 500px;
  object-fit: contain;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
  margin-top: 20px;
  padding: 20px;

  h3 {
    ${theme.ALIGN.ROW_CENTER};
    gap: 5px;
  }

  p {
    color: ${theme.COLOR.MAIN.GRAY};
    white-space: pre-wrap;
  }
`;

const FunctionButtonContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  margin-top: 20px;
`;

const ModifyButton = styled.button`
  background-color: ${theme.COLOR.MAIN.GRAY};
  border: none;
  border-radius: 20px;
  padding: 2px 8px;
  color: ${theme.COLOR.MAIN.WHITE};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transform: scale(0.9);
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 20px;
  padding: 2px 8px;
  color: ${theme.COLOR.MAIN.WHITE};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transform: scale(0.9);
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
  width: 100%;
`;

const PageCount = styled.p``;

export {
  TitleContainer,
  HeaderContainer,
  ProfileContainer,
  ProfileImg,
  ProfileDesc,
  FollowButton,
  ButtonContainer,
  SignatureContainer,
  ImageContainer,
  Button,
  Image,
  TextContainer,
  FunctionButtonContainer,
  ModifyButton,
  DeleteButton,
  CommentContainer,
  PageCount,
};
