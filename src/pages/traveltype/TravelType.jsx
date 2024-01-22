import { useState } from 'react';

import * as S from './TravelType.style';
import TypeTest from './TypeTest';
import mainlogo from '/images/mainlogo.svg';

const TravelTypePage = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const joinNumber = '12';
  return (
    <S.PageContainer>
      {!buttonClick && (
        <>
          <S.LogoWrapper>
            <img src={mainlogo} />
          </S.LogoWrapper>
          <S.ButtonContainer>
            <S.StatusText>
              지금까지 {joinNumber}명이 테스트에 참여했어요!
            </S.StatusText>
            <S.StartButton onClick={() => setButtonClick(true)}>
              시작하기
            </S.StartButton>
          </S.ButtonContainer>
        </>
      )}
      {buttonClick && <TypeTest />}
    </S.PageContainer>
  );
};

export default TravelTypePage;
