import React, { useReducer, useRef } from 'react';

import * as S from './Editor.style';
import location from '/images/location.svg';
import optionImg1 from '/images/signaturewriteOption1.svg';
import optionImg2 from '/images/signaturewriteOption2.svg';
import optionImg3 from '/images/signaturewriteOption3.svg';
import theme from '@/theme';

export default function Editor() {
  const fileInputRef = useRef(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <S.EditorContainer>
      <S.Title placeholder="제목" />
      <S.Divider />
      <S.ContentInput placeholder="오늘의 시그니처를 기록해보세요!" />
      <S.LocationContainer>
        <S.LocationIcon src={location} />
        <S.LocationButton>위치 추가</S.LocationButton>
      </S.LocationContainer>

      <S.OptionContainer>
        <S.ButtonContainer>
          <S.OptionButton src={optionImg1} />
          {/*  사진 버튼 누르면 input 태그 클릭되게 해놓음  */}
          <S.OptionButton onClick={triggerFileInput} src={optionImg2} />
          <input
            style={{ display: 'none' }}
            onChange={handleImageChange}
            ref={fileInputRef}
            type="file"
          />
          <S.OptionButton src={optionImg3} />
        </S.ButtonContainer>
        <S.SubmitButton>발행</S.SubmitButton>
      </S.OptionContainer>
    </S.EditorContainer>
  );
}
