//하나의 시그니처 전체보기 페이지
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import previous from '/images/PreviousButton.svg';
import locationImg from '/images/locationImg.svg';
import next from '/images/nextButton.svg';
import theme from '@/theme';

export default function TotalSignature() {
  const { state } = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = state.page.length;
  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(0, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(totalPages - 1, prevPage + 1));
  };
  return (
    <PageContainer>
      <Title>{state.title}</Title>
      <LocationContainer>
        <Icon src={locationImg} />
        <Text>{state.location}</Text>
      </LocationContainer>
      <ImgContainer>
        {currentPage !== 0 && (
          <img
            src={previous}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          />
        )}
        <Img src={state.page[currentPage].img} />
        {currentPage !== totalPages - 1 && (
          <img
            src={next}
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          />
        )}
      </ImgContainer>

      <PageIndicator>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PageDot key={index} selected={index === currentPage} />
        ))}
      </PageIndicator>
      <div>{state.page[currentPage].content}</div>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width:90%;
  margin: 0 auto;
`;
const LocationContainer = styled.div`
  display: flex;
`;

const Title = styled.div``;
const Icon = styled.img``;
const Text = styled.div``;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 80%;
`;

const PageIndicator = styled.div`
  display: flex;
  margin: 5%;
`;

const PageDot = styled.div`
  margin: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.selected ? '#393939' : '#828282')};
`;

const NavigationButtons = styled.div`
  display: flex;
`;
