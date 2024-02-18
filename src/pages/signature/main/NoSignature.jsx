import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './NoSignature.style';
import bookImg from '/images/bookImg.svg';

export default function NoSignature() {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <img src={bookImg} />
        <S.Text>아직 작성한 시그니처가 없어요!!</S.Text>
      </S.ContentContainer>
    </S.PageContainer>
  );
}
