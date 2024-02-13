import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './HotSignature.style';
import fire from '/images/main/fire.svg';

export default function HotSignature() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Wrapper
      onClick={() => {
        navigate('/explore');
      }}>
      <S.Container>
        <img src={fire} />
        <S.ContentContainer>
          <S.Time>{currentTime.toLocaleString()}</S.Time>
          <S.Text>지금 가장 핫한 시그니처는?</S.Text>
        </S.ContentContainer>
      </S.Container>
    </S.Wrapper>
  );
}
