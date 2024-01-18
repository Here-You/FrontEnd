import styled from 'styled-components';

import theme from '@/theme';

const ResultContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;
const LogoWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 100%;
  height: 5%;
`;
const Logo = styled.img`
  max-width: 200px;
`;
const TypeResultContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 100%;
  height: 12%;
`;
const TypeResult = styled.div`
  font-family: 'Pretendard-extrabold';
  color: ${theme.COLOR.MAIN.BLUE};
  font-size: 18px;
`;
const ResultBoxContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 100%;
  height: 70%;
  border: 1px solid black;
  border-radius: 10px;
`;

const Text1 = styled.div`
  height: 5%;
  font-size: 18px;
  font-family: 'Pretendard-extrabold';
`;
const Text2 = styled.div`
  height: 5%;
  font-size: 14px;
  font-family: 'Pretendard-bold';
`;
const ResultImg = styled.img`
  max-height: 50%;
  max-width: 70%;
  margin-top: 7px;
`;
const TagContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  height: 10%;
  width: 90%;
`;
const Tag = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  height:60%;
  margin: 0px 5px;
  border-radius: 30px;
  background-color: ${theme.COLOR.MAIN.GREEN};
  padding: 5px 11px;
  color: ${theme.COLOR.MAIN.WHITE};
  font-size: 14px;
`;
const DesContainer = styled.ul`
  ${theme.ALIGN.COLUMN_CENTER}
  border-radius: 10px;
  width: 90%;
  border: 1px solid var(--gray, #828282);
  background: ${theme.COLOR.MAIN.WHITE};
  padding: 5%;
  padding-left: 30px;
`;
const Des = styled.li`
  width: 97%;
  font-family: 'Pretendard';
  font-size: 12px;
  margin: 10px 10px 0px 0px;
`;

export {
  ResultContainer,
  LogoWrapper,
  Logo,
  TypeResult,
  TypeResultContainer,
  ResultBoxContainer,
  Text1,
  Text2,
  Tag,
  TagContainer,
  ResultImg,
  Des,
  DesContainer,
};
