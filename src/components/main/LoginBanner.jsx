import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './LoginBanner.style';
import profileImg from '/images/main/profileImg.svg';
import rightIcon from '/images/main/right.svg';
import { myPageImg } from '/public/images/mypage/index';
import { getProfileInfo } from '@/apis/request/profile';

export default function LoginBanner() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const getInfo = async () => {
    try {
      const res = await getProfileInfo();
      const members = res.data;
      setInfo(members);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        {info.nickname ? (
          <>
            <S.Img src={myPageImg.ProfilePicture} />
            <S.TextContainer>
              <S.Text1>{info.nickname}님 환영합니다🪐</S.Text1>
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
              <S.Text3>3초만에 로그인하고 여행의 이유 찾으러 가기 </S.Text3>
            </S.TextWrapper>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
