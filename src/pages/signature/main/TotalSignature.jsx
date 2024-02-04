import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './TotalSignature.style';
import previous from '/images/PreviousButton.svg';
import locationImg from '/images/locationImg.svg';
import next from '/images/nextButton.svg';

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
    <S.PageContainer>
      <S.Title>{state.title}</S.Title>
      <S.LocationContainer>
        <img src={locationImg} />
        <S.Text>{state.location}</S.Text>
      </S.LocationContainer>
      <S.ImgContainer>
        {currentPage == 0 && <S.Blank />}
        {currentPage !== 0 && (
          <img
            src={previous}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          />
        )}
        <S.Img src={state.page[currentPage].img} />
        {currentPage !== totalPages - 1 && (
          <img
            src={next}
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          />
        )}
        {currentPage == totalPages - 1 && <S.Blank />}
      </S.ImgContainer>

      <S.PageIndicator>
        {Array.from({ length: totalPages }).map((_, index) => (
          <S.PageDot key={index} selected={index === currentPage} />
        ))}
      </S.PageIndicator>
      <S.Content>{state.page[currentPage].content}</S.Content>
    </S.PageContainer>
  );
}
