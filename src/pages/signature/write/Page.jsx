// Page.js
import React from 'react';
import styled from 'styled-components';

import * as S from './Editor.style';
import addButton from '/images/addButton.svg';
import location from '/images/location.svg';
import useSignatureWrite from '@/store/useSignatureWrite';
import theme from '@/theme';

export default function Page() {
  const { pages, position, photo, updatePage, currentPageIndex } =
    useSignatureWrite();

  const handleImageChange = e => {
    const file = e.target.files[0];
    updatePage(currentPageIndex, { photo: file });
  };

  const handleContentChange = e => {
    const newContent = e.target.value;
    updatePage(currentPageIndex, { content: newContent });
  };

  return (
    <S.PageContainer>
      <S.LocationContainer>
        <S.LocationIcon src={location} />
        <S.LocationButton>{position ? position : '위치 추가'}</S.LocationButton>
      </S.LocationContainer>
      <S.InputWrap>
        {photo && <img src={URL.createObjectURL(photo)} />}
        <S.PhotoButton>
          <img src={addButton} alt="Add Button" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0,
              cursor: 'pointer',
            }}
          />
        </S.PhotoButton>
      </S.InputWrap>
      <S.ContentInput
        placeholder="오늘의 시그니처를 기록해보세요!"
        value={pages[currentPageIndex].content}
        onChange={handleContentChange}
      />
    </S.PageContainer>
  );
}
