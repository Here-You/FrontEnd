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
    <div>
      <S.LocationContainer>
        <S.LocationIcon src={location} />
        <S.LocationButton>{position ? position : '위치 추가'}</S.LocationButton>
      </S.LocationContainer>
      <InputWrap>
        {photo && <img src={URL.createObjectURL(photo)} />}
        <PhotoButton>
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
        </PhotoButton>
      </InputWrap>
      <S.ContentInput
        placeholder="오늘의 시그니처를 기록해보세요!"
        value={pages[currentPageIndex].content}
        onChange={handleContentChange}
      />
    </div>
  );
}

const InputWrap = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const PhotoButton = styled.label`
  border: 1px dashed #393939;
  width: 50%;
  height: 20vh;
  ${theme.ALIGN.COLUMN_CENTER}
  position: relative;
`;
