import { useLocation } from 'react-router-dom';

import MateMainPage from './main/MateMain';
import MateSearchPage from './search/MateSearch';
import Search from '@/components/mate/Search';

const MatePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('searchTerm');

  return (
    <div style={{ height: '100%' }}>
      {searchTerm ? (
        <>
          <Search />
          <MateSearchPage />
        </>
      ) : (
        <>
          <Search marginBottom="18.93px" />
          <MateMainPage />
        </>
      )}
    </div>
  );
};

export default MatePage;
