import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Search.style';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmitForm = e => {
    e.preventDefault();
    navigate(`/mate?searchTerm=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <S.SearchContainer>
      <S.InputContainer onSubmit={handleSubmitForm}>
        <S.InputText
          placeholder="ID로 친구 추가"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <S.SearchButton type="submit" />
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default Search;
