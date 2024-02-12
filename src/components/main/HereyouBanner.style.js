import styled from 'styled-components';

import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 15%;
  border-radius: 10px;
  background: #d7ece8;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 35%;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  background: ${theme.COLOR.MAIN.WHITE};
`;

const ContentContainer = styled.div`
  display: flex;
  height: 60%;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  color: #393939;
  font-size: 15px;
  font-family: 'Pretendard-bold';
  font-weight: 700;
`;
const Mountain = styled.img`
  display: flex;
`;

export { Wrapper, Container, LogoContainer, ContentContainer, Text, Mountain };
