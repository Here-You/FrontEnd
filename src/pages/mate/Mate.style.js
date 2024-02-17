import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 20px;
  padding: 10px 0;
  margin-top: 15px;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 400px;
  height: 300px;
  border-radius: 20px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(0.99);
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 90%;
    border-radius: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const IntroContainer = styled.div`
  text-align: center;
`;

const NickNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  h1 {
    font-size: ${FONT_SIZE.LG};
    margin: 0;
  }
`;

const FollowButton = styled.button`
  background-color: ${props =>
    props.follow ? theme.COLOR.MAIN.RED : theme.COLOR.MAIN.MEDIUM_GREEN};
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: ${theme.COLOR.MAIN.WHITE};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.95);
  }
`;

const InfoContainer = styled.div`
  text-align: center;
  color: ${theme.COLOR.MAIN.GRAY};
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CountContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
  margin-top: 20px;
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
