import { useLocation } from 'react-router-dom';

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
    <div style={{ height: '100%' }}>
      <Search />
      {searchTerm ? <MateSearchPage data={data} /> : <MateMainPage />}
    </div>
  );
};

export default MatePage;
