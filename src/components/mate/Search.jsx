import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Search.style';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // 검색어를 포함하여 다음 페이지로 이동
    // navigate(`/mate/search?userid=${searchTerm}`);
    navigate(`/mate/search`);
  };

  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.InputText
          placeholder="ID로 친구 추가"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <S.SearchButton onClick={handleSearch} />
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default Search;
