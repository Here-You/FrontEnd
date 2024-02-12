import React from 'react';

import * as S from './HereyouBanner.style';
import * as SS from './Main.style';
import hereyouText from '/images/main/hereyouFont.svg';
import logo from '/images/main/logo.svg';
import mountain from '/images/main/mountain.svg';

export default function HereyouBanner() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoContainer>
          <img src={logo} />
          <img src={hereyouText} />
        </S.LogoContainer>
        <S.ContentContainer>
          <SS.TextContainer>
            <S.Text>나를 알고, 너를 알고, 여행지를 알면,</S.Text>
            <S.Text>막막한 여행도 지피지기 백전백승</S.Text>
          </SS.TextContainer>
          <S.Mountain src={mountain} />
        </S.ContentContainer>
      </S.Container>
    </S.Wrapper>
  );
}
