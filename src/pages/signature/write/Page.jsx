// Page.js
import React, { useEffect, useState } from 'react';

import * as S from './Editor.style';
import LocationLight from '/icons/LocationLight.svg';
import addButton from '/images/addButton.svg';
import SearchMap from '@/components/searchMap/SearchMap';
import useSignatureWrite from '@/store/useSignatureWrite';

export default function Page({ image, content }) {
  const { title, pages, updatePage, currentPageIndex } = useSignatureWrite();

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updatePage(currentPageIndex, { image: imageUrl });
    }
  };

  const handleContentChange = e => {
    const newContent = e.target.value;
    updatePage(currentPageIndex, { content: newContent });
  };

  return (
    <S.PageContainer>
      <S.LocationContainer>
        <S.Icon src={LocationLight} />
        <SearchMap
          pageIndex={currentPageIndex}
          inputValue={pages[currentPageIndex]?.location}
          selectLocation={info => {
            updatePage(currentPageIndex, { location: info.name });
          }}
          placeholder="위치 입력"
        />
      </S.LocationContainer>
      <S.InputWrap>
        {image && <S.Image src={image} />}
        <S.PhotoButton>
          <img src={addButton} alt="Add Button" />
          <S.ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </S.PhotoButton>
      </S.InputWrap>
      <S.ContentInput
        placeholder="오늘의 시그니처를 기록해보세요!"
        value={content || pages[currentPageIndex]?.content}
        onChange={handleContentChange}
      />
    </S.PageContainer>
  );
}
