import { useNavigate } from 'react-router-dom';

import {
  CountryResult,
  JapanTag,
  japanDes,
  resultType,
  user,
} from '../TestData';
import * as S from './TravelType.style';
import japan from '/images/japan.svg';
import mainLogo from '/images/mainlogo.svg';

const TravelTypeResultPage = () => {
  const navigate = useNavigate();

  return (
    <S.ResultContainer>
      <S.LogoWrapper>
        <S.Logo src={mainLogo} />
      </S.LogoWrapper>
      <S.TypeResultContainer>
        <S.TypeResult>{resultType}</S.TypeResult>
        <S.Text1>유형이시군요!</S.Text1>
      </S.TypeResultContainer>
      <S.ResultBoxContainer>
        <S.Text2>{user}님에게 추천하는 여행지는 </S.Text2>
        <S.Text1>{CountryResult}</S.Text1>
        <S.ResultImg src={japan} />
        <S.TagContainer>
          <S.Tag>#{JapanTag[0]}</S.Tag>
          <S.Tag>#{JapanTag[1]}</S.Tag>
          <S.Tag>#{JapanTag[2]}</S.Tag>
        </S.TagContainer>
        <S.DesContainer>
          <S.Des>{japanDes[0]}</S.Des>
          <S.Des>{japanDes[1]}</S.Des>
          <S.Des>{japanDes[2]}</S.Des>
        </S.DesContainer>

        <S.ButtonContainer>
          <S.Button onClick={() => navigate('/')}>
            여행의 이유를 찾으로 가기
          </S.Button>
          <p>✈️</p>
        </S.ButtonContainer>
      </S.ResultBoxContainer>
    </S.ResultContainer>
  );
};

export default TravelTypeResultPage;
