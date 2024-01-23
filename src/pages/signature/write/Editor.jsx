import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as S from './Editor.style';
import Page from './Page';
import leftIcon from '/icons/leftIcon.svg';
import rightIcon from '/icons/rightIcon.svg';
import useSignatureWrite from '@/store/useSignatureWrite';

//✍️시그니처 작성하기 로직✍️//
//1. Page 컴포넌트 그대로
//2. 상태관리 라이브러리로 페이지 index별 변경 사항 있을 때마다 업데이트
//3. 발행 누르면 API POST 요청

//🔥참고사항🔥
//1. 시그니처-수정할 때도 이거 그대로 띄울 건데, 그때 첫 렌더링 시 1페이지, 이전, 다음 버튼
//누를 때마다 GET 요청 보내지 말고, 그냥 한 번에 다 가져와서 위에 상태관리에 넣어버리기
//2. 이후 로직은 동일

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
      <S.ContentContainer>
        {currentPageIndex > 0 ? (
          <img src={leftIcon} onClick={goToPreviousPage} />
        ) : (
          <S.Empty />
        )}
        <Page
          position={pages[currentPageIndex]?.position}
          photo={pages[currentPageIndex]?.photo}
          content={pages[currentPageIndex]?.content}
          onImageChange={e => handleImageChange(e, currentPageIndex)}
        />
        {currentPageIndex < pages.length - 1 ? (
          <img src={rightIcon} onClick={goToNextPage} />
        ) : (
          <S.Empty />
        )}
      </S.ContentContainer>

      <S.ButtonWrap>
        {currentPageIndex === pages.length - 1 || pages.length === 1 ? (
          <S.AddButton onClick={handleAddPage}>페이지 추가</S.AddButton>
        ) : (
          <S.Empty2 />
        )}

        <S.Button /*  enabled={validatePages()}  */ onClick={handlePublish}>
          발행
        </S.Button>
      </S.ButtonWrap>
      <div>
        <p>현재 페이지: {currentPageIndex + 1}</p>
        <p>총 페이지 개수: {pages.length}</p>
      </div>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
    </S.EditorContainer>
  );
}
