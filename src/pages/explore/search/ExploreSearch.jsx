import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import searchIcon from '/images/explore/searchIcon.svg';
import SearchResult from '@/components/explore/SearchResult';
import theme from '@/theme';

const ExploreSearch = () => {
  const params = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isValue, setIsValue] = useState(false);
  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    setIsValue(true);

    // URL 변경 및 검색어 추가
    navigate(`/explore/${searchTerm}`);
  };

  return (
    <>
      <SearchContainer>
        <InputContainer>
          <InputText
            placeholder="여행지, 시그니처, 관심 키워드 검색"
            value={params.value}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearchButtonClick} />
        </InputContainer>
      </SearchContainer>
      <Container>
        <ResultsTitle>[{params.value}] 검색 결과</ResultsTitle>
        <SearchResult />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
const ResultsTitle = styled.div`
  font-size: 16px;
  color: #000;
  font-family: 'Pretendard-bold';
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 15vh;
`;

const InputContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 295px;
  height: 42.074px;
  border-radius: 13.941px;
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  background: #fdfdfd;
  margin-top: 10px;
`;

const InputText = styled.input`
  border: none;
  background: none;
  padding-left: 17.85px;
  width: 100%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.57);
    font-family: 'Inter';
    font-size: 12.268px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.074px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 41.824px;
  height: 42.074px;
  padding-right: 0;
  border-radius: 0px 13.941px 13.941px 0px;
  border-color: transparent;
  background-color: ${theme.COLOR.MAIN.GREEN};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export default ExploreSearch;
