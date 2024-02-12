import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import * as S from './Editor.style';
import Page from './Page';
import leftIcon from '/icons/leftIcon.svg';
import rightIcon from '/icons/rightIcon.svg';
import { postNewSignature } from '@/apis/request/signature';
import useSignatureWrite from '@/store/useSignatureWrite';

export default function Editor({ setSelectedHeader }) {
  const {
    title,
    pages,
    currentPageIndex,
    addPage,
    goToPreviousPage,
    goToNextPage,
    updateTitle,
    resetData,
    updatePage,
  } = useSignatureWrite();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const maxPages = 10;

  const handleTitleChange = e => {
    const newTitle = e.target.value;
    updateTitle(newTitle);
    if (currentPageIndex === 0) {
      updatePage(currentPageIndex, { page: 1 });
    }
  };

  const handlePublish = async () => {
    let allPagesFilled = true;

    pages.forEach((page, index) => {
      if (!page?.location || !page?.content || !page?.image) {
        allPagesFilled = false;
      }
    });

    if (!allPagesFilled) {
      toast('모든 페이지 정보를 입력하세요!');
      return;
    }

    try {
      setLoading(true);
      const res = await postNewSignature(title, pages.slice(0, pages.length));
      if (res) {
        alert('시그니처가 저장되었습니다.');
        console.log(res);
        updateTitle('');
      }
      setSelectedHeader('내 시그니처');
    } catch (e) {
      setError(e);
      console.log(e);
      alert('에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPage = () => {
    if (
      !pages[currentPageIndex]?.image ||
      !pages[currentPageIndex]?.content ||
      !pages[currentPageIndex]?.location
    ) {
      toast('모든 페이지 내용을 작성해주세요!');
    } else {
      if (pages.length < maxPages) {
        addPage();
      } else {
        alert(`최대 ${maxPages}개의 페이지까지만 추가할 수 있습니다.`);
      }
    }
  };

  return (
    <S.EditorContainer>
      <S.Title
        placeholder="제목"
        value={title || ''}
        onChange={handleTitleChange}
      />
      <S.Divider />
      <S.ContentContainer>
        {currentPageIndex > 0 ? (
          <img
            src={leftIcon}
            onClick={() =>
              goToPreviousPage(
                pages[currentPageIndex]?.image,
                pages[currentPageIndex]?.content,
                pages[currentPageIndex]?.location,
              )
            }
          />
        ) : (
          <S.Empty />
        )}
        <Page
          image={pages[currentPageIndex]?.image}
          content={pages[currentPageIndex]?.content}
        />
        {currentPageIndex < pages.length - 1 ? (
          <img
            src={rightIcon}
            onClick={() =>
              goToNextPage(
                pages[currentPageIndex]?.image,
                pages[currentPageIndex]?.content,
                pages[currentPageIndex]?.location,
              )
            }
          />
        ) : (
          <S.Empty />
        )}
      </S.ContentContainer>

      <S.ButtonWrap>
        <S.Button onClick={handlePublish}>발행</S.Button>
        {(currentPageIndex === pages.length - 1 || pages.length === 1) && (
          <S.AddButton onClick={handleAddPage}>페이지 추가</S.AddButton>
        )}
      </S.ButtonWrap>
    </S.EditorContainer>
  );
}
