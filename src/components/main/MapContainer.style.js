import styled from 'styled-components';

import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  height: 30%;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 20px;
  background: var(--main, #fff);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
const Text1 = styled.div`
  display: flex;
  color: #393939;
  font-size: 20px;
  font-family: 'Pretendard-bold';
  font-weight: 700;
`;
const Text2 = styled.div`
  display: flex;
  color: #393939;
  font-size: 13px;
  font-family: 'Pretendard-semibold';
  font-weight: 600;
`;
const Text3 = styled.div`
  display: flex;
  color: #393939;
  font-size: 17px;
  font-family: 'Pretendard-semibold';
  font-weight: 600;
`;
const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: space-around;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 80%;
  flex-direction: column;
  border-radius: 20px;
  background: ${theme.COLOR.MAIN.WHITE};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export {
  Wrapper,
  Container,
  TextContainer,
  Text1,
  Text2,
  Text3,
  Box,
  BoxContainer,
};
