import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const ProfileContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  padding: 20px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  ${theme.ALIGN.COLUMN_CENTER};
  border-radius: 20px;
  border: 0.1px solid white;
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.3),
    0 13px 10px rgba(0, 0, 0, 0.02);

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 30px;
  margin-top: 10px;
  /* 
  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
    flex-direction: column;
    gap: 5px;
  } */
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${theme.COLOR.MAIN.GRAY};
  border-radius: 50%;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 75px;
    height: 75px;
  }
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    margin-top: 0px;
  }

  h1 {
    font-size: 1.8rem;
    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.LG};
    }
  }
`;

const Button = styled.button`
  background-color: ${props =>
    props.follow ? theme.COLOR.MAIN.LIGHT_GRAY : theme.COLOR.MAIN.LIGHT_GREEN};
  border: 1px solid gray;
  padding: 5px 11px;
  border-radius: 20px;
  margin-left: 10px;
  color: ${theme.COLOR.MAIN.BLACK};
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const InfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  white-space: nowrap;
  width: 90%;
  margin: auto;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  width: 70%;
  margin-top: 5px;
`;

const Intro = styled.p`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: left;
  width: 100%;
`;

export {
  ProfileContainer,
  IntroContainer,
  ImageContainer,
  Image,
  TextContainer,
  Button,
  InfoContainer,
  CountContainer,
  Intro,
};
