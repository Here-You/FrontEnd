import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MateHomePage from '../mate/home/MateHome';
import MateLookPage from '../mate/look/MateLook';
import MateManagementPage from '../mate/management/MateManagement';
import MateSearchPage from '../mate/search/MateSearch';

const MatePage = () => {
  return (
    <Routes>
      <Route path="/" element={<MateHomePage />} />
      <Route path="/search/:userid" element={<MateSearchPage />} />
      <Route path="/look" element={<MateLookPage />} />
      <Route path="/management" element={<MateManagementPage />} />
    </Routes>
  );
};

export default MatePage;
