import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MateSearchPage from '../mate/search/MateSearch';
import MateHomePage from '@/pages/mate/home/MateHome';

const MatePage = () => {
  return (
    <Routes>
      <Route path="/" element={<MateHomePage />} />
      <Route path="/search/:userid" element={<MateSearchPage />} />
    </Routes>
  );
};

export default MatePage;
