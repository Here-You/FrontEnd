import React, { useEffect, useState } from 'react';

import * as S from './SignaturePage.style';
import Banner from './components/Banner';
import MySignaturePage from './main/MySignaturePage';
import Editor from './write/Editor';
import { getSignaturePreview } from '@/apis/request/preview';
import useSignatureWrite from '@/store/useSignatureWrite';

export default function SignaturePage() {
  const [selectedHeader, setSelectedHeader] = useState('내 시그니처');
  const handleHeaderClick = header => {
    setSelectedHeader(header);
  };
  const { addPage } = useSignatureWrite();

  return (
    <>
      <Banner />
      <S.PageContainer>
        <S.ButtonContainer>
          <S.Button
            selected={selectedHeader === '내 시그니처'}
            onClick={() => {
              if (selectedHeader === '작성하기') {
                if (
                  !confirm(
                    '지금 작성 중인 모든 내용이 사라집니다.\n내 시그니처로 이동할까요?',
                  )
                ) {
                  return;
                } else {
                  handleHeaderClick('내 시그니처');
                }
              } else {
                handleHeaderClick('내 시그니처');
              }
            }}>
            내 시그니처
          </S.Button>
          <S.Button
            selected={selectedHeader === '작성하기'}
            onClick={() => {
              handleHeaderClick('작성하기');
              addPage();
            }}>
            작성하기
          </S.Button>
        </S.ButtonContainer>
        {selectedHeader === '내 시그니처' && <MySignaturePage />}
        {selectedHeader === '작성하기' && (
          <Editor setSelectedHeader={setSelectedHeader} />
        )}
      </S.PageContainer>
    </>
  );
}
