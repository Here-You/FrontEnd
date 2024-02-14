import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './LoginBanner.style';
import profileImg from '/images/main/profileImg.svg';
import rightIcon from '/images/main/right.svg';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import useAuth from '@/store/useAuth';

export default function LoginBanner({ isLogin }) {
  const navigate = useNavigate();

  const { data, isPending, isError } = useGetMyProfile();
  const myProfile = data?.data?.data?.user;

  return (
    <S.Wrapper>
      <S.Container>
        {isLogin ? (
          <>
            <S.Img src={myProfile?.profileImage} />
            <S.TextContainer>
              <S.Text1>{myProfile?.nickname}님 환영합니다🪐</S.Text1>
              <S.ProfileContainer onClick={() => navigate('/mypage')}>
                <S.Text2>내 프로필 가기</S.Text2>
                <img src={rightIcon} />
              </S.ProfileContainer>
            </S.TextContainer>
          </>
        ) : (
          <>
            <S.Img src={profileImg} />
            <S.TextWrapper onClick={() => navigate('/login')}>
              <S.Text3>3초만에 로그인하기 </S.Text3>
              <img width="24px" src={rightIcon} />
            </S.TextWrapper>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
