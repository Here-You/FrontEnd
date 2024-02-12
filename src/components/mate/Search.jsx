import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Search.style';

const Search = ({ setSearchTerm }) => {
  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.InputText
          placeholder="ID로 친구 추가"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <S.SearchButton type="submit" />
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default Search;
