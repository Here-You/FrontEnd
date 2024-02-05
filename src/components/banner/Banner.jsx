import React from 'react';

import * as S from './Banner.style';
import space from '/images/spacelogo.svg';

export default function Banner() {
  const contentData = [
    '사용자님만이 가지고 있는 특별한 여행법이 있나요?',
    '‘여행의 이유’에서는 당신의 특별함을 [시그니처]라고 말한답니다.',
    'ex ) 저는 인형과 함께 여행을 해요.',
  ];

  return (
    <S.BannerContainer>
      <S.ButtonContainer>
        <img src={space} />
        <S.Button>시그니처란?</S.Button>
      </S.ButtonContainer>
      <S.ContentContainer>
        <S.Content>{contentData[0]}</S.Content>
        <S.Content>{contentData[1]}</S.Content>
        <S.Content>{contentData[2]}</S.Content>
      </S.ContentContainer>
    </S.BannerContainer>
  );
}
