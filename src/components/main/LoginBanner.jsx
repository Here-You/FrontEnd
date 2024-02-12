import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './LoginBanner.style';
import profileImg from '/images/main/profileImg.svg';
import rightIcon from '/images/main/right.svg';

export default function LoginBanner() {
  const navigate = useNavigate();
  const nickname = '수진';
  return (
    <S.Wrapper>
      <S.Container>
        <S.Img src={profileImg} />
        <S.TextContainer>
          <S.Text1>{nickname}님 환영합니다🪐</S.Text1>
          <S.ProfileContainer onClick={() => navigate('/mypage')}>
            <S.Text2>내 프로필 가기</S.Text2>
            <img src={rightIcon} />
          </S.ProfileContainer>
        </S.TextContainer>
      </S.Container>
    </S.Wrapper>
  );
}
