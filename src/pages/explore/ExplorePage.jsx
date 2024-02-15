import { useState } from 'react';

import * as S from './ExplorePage.style';
import SignatureSearchSlider from '@/components/explore/SignatureSearchSlider';
import SignatureSearchPreviewSkeleton from '@/components/explore/skeleton/SignatureSearchPreviewSkeleton';
import {
  useGetHotSignature,
  useGetNewSignature,
} from '@/hooks/search/queries/useGetHotPost';
import { useSearchExploreKeyword } from '@/hooks/search/useSearchExploreKeyword';
import useDebounce from '@/hooks/useDebounce';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const {
    data: keyData,
    loading: keyLoading,
    error: keyError,
  } = useSearchExploreKeyword(debouncedSearchTerm);

  const {
    data: hotPost,
    isLoading: hotLoading,
    isError: hotError,
  } = useGetHotSignature();

  const {
    data: newPost,
    isLoading: newLoading,
    isError: newError,
  } = useGetNewSignature();

  const hotSignatures = hotPost?.data?.data?.covers;

  const newSignatures = newPost?.data?.data?.covers;

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
        keyLoading ? (
          <SignatureSearchPreviewSkeleton />
        ) : (
          <SignatureSearchSlider
            data={keyData}
            type="search"
            searchTerm={debouncedSearchTerm}
          />
        )
      ) : (
        <>
          {keyLoading ? (
            <SignatureSearchPreviewSkeleton />
          ) : (
            <>
              <SignatureSearchSlider data={hotSignatures} type="hot" />
              <SignatureSearchSlider data={newSignatures} type="new" />
            </>
          )}
        </>
      )}
    </>
  );
};

export default ExplorePage;
