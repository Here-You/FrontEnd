import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Box.style';
import * as SS from './Main.style';
import mateIcon from '/images/main/mateIcon.svg';
import signatureIcon from '/images/main/signatureIcon.svg';

export default function Box({ title }) {
  const navigate = useNavigate();
  const route = title == '시그니처' ? '/signature' : '/mate';

  const des =
    title == '시그니처' ? '나만의 시그니처 작성하기 ' : '나의 여행 메이트 찾기';
  const IconUrl = title == '시그니처' ? signatureIcon : mateIcon;
  return (
    <S.Wrapper
      onClick={() => {
        navigate(route);
      }}>
      <S.Container>
        <SS.TextContainer>
          <SS.Text1>{title}</SS.Text1>
          <SS.Text2>{des}</SS.Text2>
        </SS.TextContainer>
        <S.Icon src={IconUrl} />
      </S.Container>
    </S.Wrapper>
  );
}
