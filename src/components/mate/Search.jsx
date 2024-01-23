import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Search.style';

const Search = ({ marginBottom }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const urlSearchTerm = searchParams.get('searchTerm') || '';
    setSearchTerm(urlSearchTerm);
  }, [location.search]);

  const handleSearch = () => {
    navigate(`/mate?searchTerm=${encodeURIComponent(searchTerm)}`);
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <S.SearchContainer marginBottom={marginBottom}>
      <S.InputContainer>
        <S.InputText
          placeholder="ID로 친구 추가"
          value={searchTerm}
          onChange={handleChange}
        />
        <S.SearchButton onClick={handleSearch} />
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default Search;
