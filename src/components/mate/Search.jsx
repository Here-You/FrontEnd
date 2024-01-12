import React from 'react';

import * as A from './Search.style';

const Search = () => {
  return (
    <A.ParentConatiner>
      <A.SearchContainer>
        <A.InputContainer placeholder="ID로 친구 추가" />
        <A.SearchButton />
      </A.SearchContainer>
    </A.ParentConatiner>
  );
};

export default Search;
