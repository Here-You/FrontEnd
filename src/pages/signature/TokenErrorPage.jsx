import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './TokenErrorPage.style';
import spacelogo from '/images/spacelogoShadow.svg';

const TokenErrorPage = () => {
  const navigate = useNavigate();
  return (
    <S.PageContainer>
      <S.BackgroundColor />
      <S.LogoWrapper>
        <S.SpaceLogo src={spacelogo} />
      </S.LogoWrapper>
      <S.TextContainer>
        <S.AnimatedText>막막한 여행도</S.AnimatedText>
        <S.AnimatedText>이유를 알면</S.AnimatedText>
        <S.AnimatedText>지피지기 백전백승</S.AnimatedText>
      </S.TextContainer>
      <S.Text>여행을 정리하고 기록하며 당신을 알아가보세요.</S.Text>
      <S.StartButton
        onClick={() => {
          navigate('/login');
        }}>
        시작하기
      </S.StartButton>
    </S.PageContainer>
  );
};

export default TokenErrorPage;
