import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './NoSignature.style';
import bookImg from '/images/bookImg.svg';

//내 시그니처 없으면 띄우는 페이지
export default function NoSignature() {
  const navigate = useNavigate();
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <img src={bookImg} />
        <S.Text>아직 작성한 시그니처가 없어요!</S.Text>
      </S.ContentContainer>
    </S.PageContainer>
  );
}
