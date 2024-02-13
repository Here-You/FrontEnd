import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './TokenErrorPage.style';
import spaceLogo from '/images/spacelogoShadow.svg';

const TokenErrorPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <S.PageContainer
      style={{ marginTop: pathname == '/signature' ? '100px' : '0px' }}>
      <S.BackgroundColor />
      <S.LogoWrapper>
        <S.SpaceLogo src={spaceLogo} />
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
