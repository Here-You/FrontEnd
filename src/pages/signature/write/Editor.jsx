import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as S from './Editor.style';
import Page from './Page';
import useSignatureWrite from '@/store/useSignatureWrite';

export default function Editor() {
  const {
    title,
    pages,
    currentPageIndex,
    addPage,
    removePage,
    goToPreviousPage,
    goToNextPage,
    updateTitle,
    updatePage,
  } = useSignatureWrite();

  const fileInputRef = useRef(null);
  const maxPages = 10;

  const handleImageChange = (e, pageIndex) => {
    const file = e.target.files[0];
    // Implement logic to handle image change for the specified page (pageIndex)
  };

  const handleTitleChange = e => {
    const newTitle = e.target.value;
    updateTitle(newTitle);
  };

  const handlePublish = () => {
    if (validatePages()) {
      // Implement logic to publish the content
      alert('발행 완료!');
    }
  };

  const handleAddPage = () => {
    if (pages.length < maxPages) {
      addPage();
    } else {
      alert(`최대 ${maxPages}개의 페이지까지만 추가할 수 있습니다.`);
    }
  };

  const validatePages = () => {
    // Implement validation logic for each page (position, photo, content)
    for (let i = 0; i < pages.length - 1; i++) {
      const page = pages[i];
      if (!page.position || !page.photo || !page.content) {
        alert('모든 페이지 정보를 입력하세요!');
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    console.log('페이지', pages);
  }, [pages]);

  return (
    <S.EditorContainer>
      <S.Title placeholder="제목" value={title} onChange={handleTitleChange} />
      <S.Divider />
      <div>
        {currentPageIndex > 0 && (
          <button onClick={goToPreviousPage}>이전</button>
        )}
        <Page
          position={pages[currentPageIndex]?.position}
          photo={pages[currentPageIndex]?.photo}
          content={pages[currentPageIndex]?.content}
          onImageChange={e => handleImageChange(e, currentPageIndex)}
        />
        {currentPageIndex < pages.length - 1 && (
          <button onClick={goToNextPage}>다음</button>
        )}
      </div>

      <ButtonWrap>
        {(currentPageIndex === pages.length - 1 || pages.length === 1) && (
          <AddButton onClick={handleAddPage}>페이지 추가</AddButton>
        )}

        <Button /*  enabled={validatePages()}  */ onClick={handlePublish}>
          발행
        </Button>
      </ButtonWrap>
      <div>
        <p>현재 페이지: {currentPageIndex + 1}</p>
        <p>총 페이지 개수: {pages.length}</p>
      </div>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
    </S.EditorContainer>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  margin-left: 70%;
  font-family: 'Pretendard-bold';
`;

const AddButton = styled.button`
  display: flex;
  border-radius: 5px;
  background: var(--New-Main, #21b69c);
  padding: 5px 11px;
  outline: none;
  color: white;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  border-radius: 5px;
  background: ${props => (props.enabled ? 'var(--New-Main, #21b69c)' : '#ccc')};
  padding: 5px 11px;
  outline: none;
  color: white;
  border: none;
  margin-right: 10px;
  cursor: ${props => (props.enabled ? 'pointer' : 'not-allowed')};
`;
