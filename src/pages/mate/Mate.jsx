import { useLocation } from 'react-router-dom';

import * as S from './Mate.style';
import MateMainPage from './main/MateMain';
import MateSearchPage from './search/MateSearch';
import Search from '@/components/mate/Search';
import { useSearchMate } from '@/hooks/mate/useSearchMate';

const MatePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('searchTerm') || '';

  const { data, loading, error } = useSearchMate(searchTerm);

  return (
    <S.Container>
      <Search />
      {searchTerm ? <MateSearchPage data={data} /> : <MateMainPage />}
    </S.Container>
  );
};

export default MatePage;
