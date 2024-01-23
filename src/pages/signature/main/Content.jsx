import React, { useState } from 'react';
import styled from 'styled-components';

import LikeContent from './LikeContent';
import MySignature from './MySignature';
import RecContent from './RecContent';

export default function Content() {
  const [selectedHeader, setSelectedHeader] = useState('내 시그니처');

  const handleHeaderClick = header => {
    setSelectedHeader(header);
  };

  return (
    <ContentWrap>
      <ContentHeaderWrap>
        <ContentHeader
          selected={selectedHeader === '내 시그니처'}
          onClick={() => handleHeaderClick('내 시그니처')}>
          내 시그니처
        </ContentHeader>
        <ContentHeader
          selected={selectedHeader === '좋아요'}
          onClick={() => handleHeaderClick('좋아요')}>
          좋아요
        </ContentHeader>
        <ContentHeader
          selected={selectedHeader === '추천'}
          onClick={() => handleHeaderClick('추천')}>
          추천
        </ContentHeader>
      </ContentHeaderWrap>
      {selectedHeader === '내 시그니처' && <MySignature />}
      {selectedHeader === '좋아요' && <LikeContent />}
      {selectedHeader === '추천' && <RecContent />}
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 90%;
`;
const ContentHeaderWrap = styled.div`
  display: flex;
  font-family: 'Pretendard-bold';
  font-size: 16px;
  height: 13%;
  width: 90%;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContentHeader = styled.div`
  display: flex;
  border-bottom: ${props => (props.selected ? '2px solid #1b9c85' : 'none')};
  padding: 10px 0px;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => (props.selected ? '#393939' : '#828282')};

  &:hover {
    color: #393939;
  }
`;
