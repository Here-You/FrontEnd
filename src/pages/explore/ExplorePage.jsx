import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './ExplorePage.style';
import SignatureSearchSlider from '@/components/explore/SignatureSearchSlider';
import { useSearchKeyWord } from '@/hooks/search/useSearchKeyWord';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const keyWord = useRef(null);

  const handleSearchButtonClick = () => {
    setSearchTerm(keyWord.current.value);
    navigate(`/explore/?search=${searchTerm}`);
  };

  const { data, loading, error } = useSearchKeyWord(searchTerm);

  const hotSignature = data.hot;
  const newSignature = data.new;

  if (loading) {
    return <div>로딩중입니다...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <>
      <S.SearchContainer>
        <S.InputContainer>
          <S.InputText
            placeholder="여행지, 시그니처, 관심 키워드 검색"
            ref={keyWord}
          />
          <S.SearchButton onClick={handleSearchButtonClick} />
        </S.InputContainer>
        <S.Text>다양한 관심사를 검색해보세요</S.Text>
      </S.SearchContainer>
      <>
        <SignatureSearchSlider data={hotSignature} />
        <SignatureSearchSlider data={newSignature} />
      </>
    </>
  );
}
