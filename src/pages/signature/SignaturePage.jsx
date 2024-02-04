import React, { useEffect, useState } from 'react';

import * as S from './SignaturePage.style';
import Banner from './components/Banner';
import Preview from './components/Preview';
import MySignaturePage from './main/MySignaturePage';
import Editor from './write/Editor';
import { getSignaturePreview } from '@/apis/request/preview';

export default function SignaturePage() {
  const [selectedHeader, setSelectedHeader] = useState('내 시그니처');
  const handleHeaderClick = header => {
    setSelectedHeader(header);
  };

  return (
    <>
      <Banner />
      <S.PageContainer>
        <S.ButtonContainer>
          <S.Button
            selected={selectedHeader === '내 시그니처'}
            onClick={() => handleHeaderClick('내 시그니처')}>
            내 시그니처
          </S.Button>
          <S.Button
            selected={selectedHeader === '작성하기'}
            onClick={() => handleHeaderClick('작성하기')}>
            작성하기
          </S.Button>
        </S.ButtonContainer>
        {selectedHeader === '내 시그니처' && <MySignaturePage />}
        {selectedHeader === '작성하기' && <Editor />}
      </S.PageContainer>
    </>
  );
}
