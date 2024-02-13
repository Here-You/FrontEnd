import React from 'react';

import * as S from './MapContainer.style';
import calendar from '/images/main/calendar.svg';
import map from '/images/main/map.svg';

export default function MapContainer() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TextContainer>
          <S.Text1>여행 일정</S.Text1>
          <S.Text2>나만의 여행 일정 계획하기</S.Text2>
        </S.TextContainer>
        <S.BoxContainer>
          <S.Box>
            <img src={calendar} />
            <S.Text3>캘린더로 보기</S.Text3>
          </S.Box>
          <S.Box>
            <img src={map} />
            <S.Text3>지도로 보기</S.Text3>
          </S.Box>
        </S.BoxContainer>
      </S.Container>
    </S.Wrapper>
  );
}
