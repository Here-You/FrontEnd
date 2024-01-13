import React from 'react';

import MateSearchPage from '../mate/search/MateSearch';
import MateHomePage from '@/pages/mate/home/MateHome';

const MatePage = () => {
  return (
    <div>
      <MateHomePage />
      <MateSearchPage />
    </div>
  );
};

export default MatePage;
