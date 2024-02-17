import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Container = styled.div`
  cursor: pointer;
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 10px;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
    transition: ease-in;
  }
`;

const Liked = styled.div`
  display: flex;
  outline: none;
  color: black;
  cursor: pointer;
  margin-left: 3px;
`;

const OutLineHeart = styled(AiOutlineHeart)`
  position: absolute;
  fill: white;
  left: -2px;
  top: -2px;
`;

const FillHeart = styled(AiFillHeart)`
  fill: ${props => (props.isLiked ? 'red' : 'gray')};
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: auto;
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
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
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const ProfileDesc = styled.div`
  margin-left: 10px;
  font-size: 1rem;

  date {
    font-size: 0.8rem;
    color: ${theme.COLOR.MAIN.GRAY};
  }
  h3 {
    font-family: 'Pretendard-light';
    font-size: 1rem;
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
  display: flex;
  width: 90%;
  margin: 20px auto 10px auto;
  font-size: ${FONT_SIZE.XS};
  gap: 10px;

  h1 {
    font-size: 20px;
    font-family: 'Pretendard-semibold';
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 92%;
  margin: 10px auto 5px auto;
  gap: 2px;
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

const Line = styled.div`
  display: flex;
  width: 100%;
  height: 1.7px;
  background-color: pink;
  margin-top: 5px;
`;

const ImageContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const Button = styled.button`
  border: none;
  font-size: 3rem;
  background-color: transparent;
  cursor: pointer;

  &:not(:disabled):hover {
    transform: scale(0.9);
    color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 7px;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 10px;
  padding: 10px;

  h3 {
    ${theme.ALIGN.ROW_CENTER};
    gap: 5px;
    font-family: 'Pretendard-semibold';
    font-size: 16px;
  }

  p {
    color: ${theme.COLOR.MAIN.GRAY};
    white-space: pre-wrap;
    font-family: 'Pretendard-light';
    font-size: 16px;
  }

  img {
    width: 25px;
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

const HeartCountWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  font-size: 15px;
  margin-top: 10px;

  &:hover {
    background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
    border-radius: 20px;
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

const PageCount = styled.p`
  display: flex;
  margin: 10px auto 0px auto;
  font-family: 'Pretendard-semibold';
`;

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
  HeartCountWrapper,
  TextContainer,
  FunctionButtonContainer,
  ModifyButton,
  DeleteButton,
  CommentContainer,
  PageCount,
  Container,
  FillHeart,
  OutLineHeart,
  Liked,
  Line,
};
