import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Schema from '../schema/SignUpSchema';
import * as S from './SignUpMyInfo.style';
import useUser from '@/store/useUser';
import { yupResolver } from '@hookform/resolvers/yup';

const SignUpMyInfo = () => {
  const navigate = useNavigate();
  const { addInformation } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
      pw: '',
      checkPw: '',
      introduction: '',
    },
  });

  const onSubmit = data => {
    addInformation(data);

    reset();
  };

  return (
    <>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.Title>이메일</S.Title>
        <S.Input
          id="email"
          placeholder="아이디를 입력하세요"
          {...register('email')}
        />
        <S.ErrorMessage>{errors.certifi_email?.message}</S.ErrorMessage>
        <S.Title>비밀번호</S.Title>
        <S.Input
          id="pw"
          placeholder="비밀번호를 입력하세요"
          {...register('pw')}
        />
        <S.ErrorMessage>{errors.pw?.message}</S.ErrorMessage>
        <S.Title>비밀번호 확인</S.Title>

        <S.Input
          id="checkPw"
          placeholder="비밀번호 확인"
          {...register('checkPw')}
        />
        <S.ErrorMessage>{errors.checkPw?.message}</S.ErrorMessage>
        <S.Title>닉네임</S.Title>
        <S.Input
          id="nickname"
          placeholder="닉네임을 입력하세요"
          {...register('nickname')}
        />

        <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
        <S.Title>프로필 소개</S.Title>
        <S.Input
          id="introduction"
          placeholder="프로필 소개를 입력하세요"
          {...register('introduction')}
        />
        <S.ErrorMessage>{errors.introduction?.message}</S.ErrorMessage>
        <S.StoreButton>저장하기</S.StoreButton>
      </S.Container>
    </>
  );
};

export default SignUpMyInfo;
