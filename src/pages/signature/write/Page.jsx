import React, { useCallback, useEffect, useRef } from 'react';

import * as S from './Editor.style';
import LocationLight from '/icons/LocationLight.svg';
import addButton from '/images/addButton.svg';
import SearchMap from '@/components/searchMap/SearchMap';
import useHandleImageChange from '@/hooks/image/useHandleImageChange';
import useSignatureWrite from '@/store/useSignatureWrite';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Page({ image, content }) {
  const { title, pages, updatePage, currentPageIndex, resetData } =
    useSignatureWrite();

  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const handleImageChange = useHandleImageChange(currentPageIndex, updatePage);

  const handleContentChange = e => {
    const newContent = e.target.value;
    updatePage(currentPageIndex, { content: newContent });
  };

  useEffect(() => {
    resetData();
    console.log(currentPageIndex);
  }, []);

  return (
    <S.PageContainer>
      <S.LocationContainer>
        <S.Icon src={LocationLight} />
        <SearchMap
          pageIndex={currentPageIndex}
          inputValue={pages[currentPageIndex]?.location}
          selectLocation={info => {
            updatePage(currentPageIndex, { location: info?.name });
          }}
          placeholder="위치 입력"
        />
      </S.LocationContainer>
      <S.InputWrap>
        {image && (
          <S.Image
            height={'fit-content'}
            effect="blur"
            src={`data:image/jpeg;base64,${image}`}
          />
        )}
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
        ref={textRef}
        placeholder="오늘의 시그니처를 기록해보세요!"
        value={content || pages[currentPageIndex]?.content || ''}
        onChange={e => {
          handleContentChange(e);
          handleResizeHeight();
        }}
      />
    </S.PageContainer>
  );
}
