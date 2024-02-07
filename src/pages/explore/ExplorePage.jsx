import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './ExplorePage.style';
import SignatureSearchSlider from '@/components/explore/SignatureSearchSlider';
import { useSearchKeyWord } from '@/hooks/search/useSearchKeyWord';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
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

  console.log(data);

  return (
    <>
      <S.SearchContainer>
        <S.InputContainer onSubmit={handleSubmit}>
          <S.InputText
            placeholder="여행지, 시그니처, 관심 키워드 검색"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <S.SearchButton type="submit" />
        </S.InputContainer>
        <S.Text>다양한 관심사를 검색해보세요</S.Text>
      </S.SearchContainer>
      <>
        <SignatureSearchSlider data={hotSignature} type="hot" />
        <SignatureSearchSlider data={newSignature} type="new" />
      </>
    </>
  );
};

export default ExplorePage;
