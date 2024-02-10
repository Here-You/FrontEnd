import styled from 'styled-components';

import theme from '@/theme';

const ProfileContainer = styled.div`
  width: 80%;
  height: 200px;
  padding: 20px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  ${theme.ALIGN.COLUMN_CENTER};
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 30px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${theme.COLOR.MAIN.GRAY};
  border-radius: 50%;
  margin: 20px 0 0 10px;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-top: 30px;
`;

const InfoContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  white-space: nowrap;
  gap: 40px;
`;

const CountContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  white-space: nowrap;
  margin-top: 30px;
  gap: 40px;
`;

const Intro = styled.p`
  margin-top: 30px;
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: left;
  width: 80%;
`;

export {
  ProfileContainer,
  ImageContainer,
  Image,
  TextContainer,
  InfoContainer,
  CountContainer,
  Intro,
};
