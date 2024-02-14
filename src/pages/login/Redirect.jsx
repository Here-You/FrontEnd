import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import * as S from './Redirect.style';
import RedirectIcon from '/images/RedirectIcon.png';
import { postSnsLogin } from '@/apis/request/profile';
import useAuth from '@/store/useAuth';

const Redirect = () => {
  const navigate = useNavigate();
  const { login: kakaoLogin } = useAuth();
  const code = new URLSearchParams(window.location.search).get('code');
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        try {
          const response = await postSnsLogin('KAKAO', code, redirect_uri);

          const token = response.data.token;
          kakaoLogin(token);

          const register_required = response.data.register_required;
          register_required ? navigate('/signup') : navigate('/');
          toast.success('로그인 성공');
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [code]);

  return (
    <S.Container>
      <S.Image src={RedirectIcon} />
      <h3>여행의 이유를 찾는 중입니다 ! </h3>
      <p>잠시만 기다려주세요</p>
    </S.Container>
  );
};

export default Redirect;
