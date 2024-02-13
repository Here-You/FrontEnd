import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Schema from '../schema/Schema';
import * as S from './SignUpMyInfo.style';
import { postAddInformation } from '@/apis/request/profile';
import { yupResolver } from '@hookform/resolvers/yup';

const SignUpMyInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      introduction: '',
    },
  });

  const onSubmit = async data => {
    reset();

    setIsLoading(true);
    try {
      const res = postAddInformation(data.nickname, data.introduction);
      if (res) {
        alert('정보가 입력되었습니다.');
        console.log('제출된 데이터: ', data);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      console.error('서버 내부 오류.', error);
      alert('서버 내부 오류');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="닉네임을 입력하세요"
          {...register('introduction')}
        />
        <S.ErrorMessage>{errors.introduction?.message}</S.ErrorMessage>
        <S.StoreButton type="submit">저장하기</S.StoreButton>
      </S.Container>
    </>
  );
};

export default SignUpMyInfo;
