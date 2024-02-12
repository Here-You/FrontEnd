import styled from 'styled-components';

import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
`;

const ProfileContainer = styled.div`
  width: 400px;
  height: 200px;
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
  border-radius: 30px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const IntroContainer = styled.div``;

const NickNameContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
  h1 {
    font-size: 20px;
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
  margin-top: 20px;
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
