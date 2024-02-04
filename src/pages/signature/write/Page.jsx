// Page.js
import React, { useState } from 'react';

import * as S from './Editor.style';
import LocationLight from '/icons/LocationLight.svg';
import addButton from '/images/addButton.svg';
import SearchMap from '@/components/searchMap/SearchMap';
import useSignatureWrite from '@/store/useSignatureWrite';

export default function Page({ photo, location, content }) {
  const { title, pages, updatePage, currentPageIndex } = useSignatureWrite();
  const [locationInfo, setLocationInfo] = useState({});

  console.log(pages[currentPageIndex]);

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
        <S.Icon src={LocationLight} />
        <SearchMap
          stateInputValue={true}
          inputValue={location || ''}
          selectLocation={info => {
            setLocationInfo(info);
            updatePage(currentPageIndex, { location: locationInfo.name });
          }}
        />
      </S.LocationContainer>
      <S.InputWrap>
        {photo && <S.Image src={URL.createObjectURL(photo)} />}
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
        value={content || pages[currentPageIndex].content}
        onChange={handleContentChange}
      />
    </S.PageContainer>
  );
}
