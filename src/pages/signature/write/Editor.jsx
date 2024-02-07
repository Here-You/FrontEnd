import React, { useEffect, useState } from 'react';

import * as S from './Editor.style';
import Page from './Page';
import leftIcon from '/icons/leftIcon.svg';
import rightIcon from '/icons/rightIcon.svg';
import { postNewSignature } from '@/apis/request/signature';
import useSignatureWrite from '@/store/useSignatureWrite';

//✍️시그니처 작성하기 로직✍️//
//1. Page 컴포넌트 그대로
//2. 상태관리 라이브러리로 페이지 index별 변경 사항 있을 때마다 업데이트
//3. 발행 누르면 API POST 요청

//🔥참고사항🔥
//1. 시그니처-수정할 때도 이거 그대로 띄울 건데, 그때 첫 렌더링 시 1페이지, 이전, 다음 버튼
//누를 때마다 GET 요청 보내지 말고, 그냥 한 번에 다 가져와서 위에 상태관리에 넣어버리기
//2. 이후 로직은 동일

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
  console.log(pages);

  const handlePublish = async () => {
    let allPagesFilled = true;

    pages.forEach((page, index) => {
      if (!page?.location || !page?.content || !page?.image) {
        allPagesFilled = false;
      }
    });

    if (!allPagesFilled) {
      alert('모든 페이지 정보를 입력하세요!');
      return;
    }

    try {
      setLoading(true);
      const res = await postNewSignature(title, pages.slice(0, pages.length));
      if (res) {
        alert('시그니처가 저장되었습니다.');
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
    if (pages.length < maxPages) {
      addPage();
    } else {
      alert(`최대 ${maxPages}개의 페이지까지만 추가할 수 있습니다.`);
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
          <img src={leftIcon} onClick={goToPreviousPage} />
        ) : (
          <S.Empty />
        )}
        <Page
          image={pages[currentPageIndex]?.image}
          content={pages[currentPageIndex]?.content}
        />
        {currentPageIndex < pages.length - 1 ? (
          <img src={rightIcon} onClick={goToNextPage} />
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
