import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as A from './Search.style';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // 검색어를 포함하여 다음 페이지로 이동
    navigate(`/mate/search?userid=${searchTerm}`);
  };

  return (
    <A.ParentConatiner>
      <A.SearchContainer>
        <A.InputContainer
          placeholder="ID로 친구 추가"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <A.SearchButton onClick={handleSearch} />
      </A.SearchContainer>
    </A.ParentConatiner>
  );
};

export default Search;
