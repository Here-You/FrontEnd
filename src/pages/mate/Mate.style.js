import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
  padding: 10px 0;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}

  gap: 50px;
  justify-content: space-around;
  border-radius: 30px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  padding: 10px 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 10px;
    max-width: 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 50px;
    height: 50px;
  }
`;

const IntroContainer = styled.div``;

const NickNameContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
  margin-top: 20px;
  h1 {
    font-size: ${FONT_SIZE.LG};
  }
`;

const FollowButton = styled.button`
  background-color: ${theme.COLOR.MAIN.MEDIUM_GREEN};
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${theme.COLOR.MAIN.WHITE};

  &:hover {
    transform: scale(0.9);
  }
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  color: ${theme.COLOR.MAIN.GRAY};
`;

const CountContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  margin-bottom: 20px;
  gap: 30px;
`;

export {
  Container,
  ProfileContainer,
  ProfileImage,
  IntroContainer,
  NickNameContainer,
  FollowButton,
  InfoContainer,
  CountContainer,
};
