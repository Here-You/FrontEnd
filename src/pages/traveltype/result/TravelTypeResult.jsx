import styled from 'styled-components';

import japan from '/images/japan.svg';
import mainlogo from '/images/mainlogo.svg';
import theme from '@/theme';

const TravelTypeResultPage = () => {
  const resultType = '탐험가 바다거북이 🐢';
  const user = '이유지';
  const CountryResult = '오키나와, 일본 ';
  const JapanTag = ['스노우쿨링', '액티비티', '감성'];
  const japanDes = [
    '에너지가 가득한 오키나와, 에너자이저인 당신에게 더욱 힘을 실어줄 수 있겠군요!',
    '창문을 열면 바다! 감성적인 당신에게 에메랄드빛 바다는 마음 속에 깊게 기억될 거예요.',

    '오키나와에서 수영은 필수! 여행 예약 서비스에서 하루 종일 바다에 있는 코스를 예약하고 원없이 수영을 즐겨보세요',
  ];
  return (
    <ResultContainer>
      <LogoWrapper>
        <Logo src={mainlogo} />
      </LogoWrapper>
      <TypeResultContainer>
        <TypeResult>{resultType}</TypeResult>
        <Text1>유형이시군요!</Text1>
      </TypeResultContainer>
      <ResultBoxContainer>
        <Text2>{user}님에게 추천하는 여행지는 </Text2>
        <Text1>{CountryResult}</Text1>
        <ResultImg src={japan} />
        <TagContainer>
          <Tag>#{JapanTag[0]}</Tag>
          <Tag>#{JapanTag[1]}</Tag>
          <Tag>#{JapanTag[2]}</Tag>
        </TagContainer>
        <DesContainer>
          <Des>{japanDes[0]}</Des>
          <Des>{japanDes[1]}</Des>
          <Des>{japanDes[2]}</Des>
        </DesContainer>
      </ResultBoxContainer>
    </ResultContainer>
  );
};

export default TravelTypeResultPage;

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
