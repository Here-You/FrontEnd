import { useState } from 'react';

import * as S from './ExplorePage.style';
import SignatureSearchSlider from '@/components/explore/SignatureSearchSlider';
import { useSearchExploreKeyword } from '@/hooks/search/useSearchExploreKeyword';
import { useSearchExploreMain } from '@/hooks/search/useSearchExploreMain';
import useDebounce from '@/hooks/useDebounce';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { data, loading, error } = useSearchExploreMain();
  const {
    data: keyData,
    loading: keyLoading,
    error: keyError,
  } = useSearchExploreKeyword(debouncedSearchTerm);

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
            placeholder="여행지, 시그니처, 관심 키워드를 검색하세요."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </S.InputContainer>
        <S.Text>다양한 관심사를 검색해보세요</S.Text>
      </S.SearchContainer>
      {debouncedSearchTerm ? (
        <SignatureSearchSlider
          data={keyData}
          type="search"
          searchTerm={debouncedSearchTerm}
        />
      ) : (
        <>
          <SignatureSearchSlider data={data?.hot} type="hot" />
          <SignatureSearchSlider data={data?.new} type="new" />
        </>
      )}
    </>
  );
};

export default ExplorePage;
