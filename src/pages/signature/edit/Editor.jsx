import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Page from './Page';
import * as S from './SignatureEdit.style';
import leftIcon from '/icons/leftIcon.svg';
import rightIcon from '/icons/rightIcon.svg';
import { updateMySignature } from '@/apis/request/signature';
import useSignatureEdit from '@/store/useSignatureEdit';

const Editor = ({ signatureId }) => {
  const {
    title,
    pages,
    currentPageIndex,
    addPage,
    goToPreviousPage,
    goToNextPage,
    updateTitle,
  } = useSignatureEdit();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const maxPages = 10;

  const handleTitleChange = e => {
    const newTitle = e.target.value;
    updateTitle(newTitle);
  };

  const handlePublish = async () => {
    let allPagesFilled = true;

    pages.forEach((page, index) => {
      if (!page.location || !page.content || !page.image) {
        allPagesFilled = false;
      }
    });

    if (!allPagesFilled) {
      toast('모든 페이지 정보를 입력하세요!');
      return;
    }

    try {
      setLoading(true);
      const res = await updateMySignature(
        signatureId,
        title,
        pages.slice(0, pages.length),
      );
      if (res) {
        toast.success('시그니처가 수정되었습니다.');
        navigate(`/signature/post/${signatureId}`);
      }
      console.log(res);
    } catch (e) {
      setError(e);
      toast.error('에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPage = () => {
    if (pages.length < maxPages) {
      addPage();
    } else {
      toast(`최대 ${maxPages}개의 페이지까지만 추가할 수 있습니다.`);
    }
  };

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
          location={pages[currentPageIndex]?.location}
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
};

export default Editor;
