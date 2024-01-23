import React from 'react';

import * as S from './Banner.style';
import space from '/images/spacelogo.svg';

const Banner = () => {
  return (
    <S.BannerContainer>
      <S.TitleContainer>
        <img src={space} />
        <span>메이트란?</span>
      </S.TitleContainer>
      <S.Contents>
        <span>운명적인 여행 메이트, 어디없을까?</span>
        <span>시그니처 태그를 통해 운명의 여행 메이트를 탐색해보세요</span>
      </S.Contents>
    </S.BannerContainer>
  );
};

export default Banner;
