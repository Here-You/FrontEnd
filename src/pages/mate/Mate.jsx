import { useLocation } from 'react-router-dom';

import MateContainer from './MateContainer';
import MateMainPage from './main/MateMain';
import MateSearchPage from './search/MateSearch';
import Search from '@/components/mate/Search';
import { useSearchMate } from '@/hooks/mate/useSearchMate';

const MatePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('searchTerm') || '';
  const { data, loading, error } = useSearchMate(searchTerm);
  console.log(searchTerm);
  console.log(data);

  return (
    <MateContainer>
      <Search />
      {searchTerm ? <MateSearchPage data={data} /> : <MateMainPage />}
    </MateContainer>
  );
};

export default MatePage;
