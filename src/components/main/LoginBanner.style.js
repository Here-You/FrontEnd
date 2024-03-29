import styled from 'styled-components';

import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 12%;
  background-color: ${theme.COLOR.MAIN.GREEN};
  border-radius: 0px 0px 20px 20px;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

const Img = styled.img`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
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
const TextWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  color: white;
  justify-content: center;
  align-items: center;
`;

const Text1 = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

const Text2 = styled.div`
  font-size: 15px;
`;

const Text3 = styled.div`
  font-size: 18px;
  color: ${theme.COLOR.MAIN.WHITE};
`;

export {
  Wrapper,
  Container,
  Img,
  ProfileContainer,
  TextContainer,
  Text1,
  Text2,
  Text3,
  TextWrapper,
};
