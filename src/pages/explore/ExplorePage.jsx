import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ExploreSearch from './search/ExploreSearch';
import searchIcon from '/images/explore/searchIcon.svg';
import Recent from '@/components/explore/Recent';
import Trending from '@/components/explore/Trending';
import theme from '@/theme';

export default function ExplorePage() {
  const [isValue, setIsValue] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    setIsValue(true);

    // URL 변경 및 검색어 추가
    navigate(`/explore/${searchTerm}`);
  };

  return (
    <div>
      <SearchContainer>
        <InputContainer>
          <InputText
            placeholder="여행지, 시그니처, 관심 키워드 검색"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearchButtonClick} />
        </InputContainer>
        <Text>다양한 관심사를 검색해보세요</Text>
      </SearchContainer>

      <div>
        <Trending />
        <Recent />
      </div>
    </div>
  );
}

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

const Text = styled.div``;
