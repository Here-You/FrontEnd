import styled from 'styled-components';

import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  background-color: ${theme.COLOR.MAIN.GREEN};
  border-radius: 0px 0px 20px 20px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

const Img = styled.img`
  display: flex;
  height: 50%;
  border-radius: 100%;
`;
const ProfileContainer = styled.div`
  display: flex;
  cursor: pointer;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 5%;
  line-height: 1.5;
`;
const Text1 = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;
const Text2 = styled.div`
  font-size: 15px;
`;

export {
  Wrapper,
  Container,
  Img,
  ProfileContainer,
  TextContainer,
  Text1,
  Text2,
};
