import { format } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

import * as S from './DailyRecordPage.style';
import { testData } from './data';
import ExpandLeft from '/icons/ExpandLeft.svg';
import ExpandRight from '/icons/ExpandRight.svg';

const DailyRecordPage = () => {
  const [currentVisibleData, setCurrentVisibleData] = useState({});
  const [slideDirection, setSlideDirection] = useState(null);
  const [nowPage, setNowPage] = useState(3);

  const date = useMemo(() => {
    if (!currentVisibleData.date) {
      return null;
    }

    return `${format(currentVisibleData.date, 'yyyy년 MM월 dd일')}`;
  }, [currentVisibleData.date]);

  useEffect(() => {
    setCurrentVisibleData(testData[nowPage - 1]); //처음 불러온 데이터
  }, [nowPage]);

  const handleAnimationEnd = () => {
    setSlideDirection(null);
  };

  const prevButtonClick = () => {
    if (nowPage === 1) {
      alert('이번 달 가장 첫 일지입니다!');
    } else {
      setSlideDirection('slide-right');
      setNowPage(prevPage => prevPage - 1);
    }
  };

  const nextButtonClick = () => {
    if (nowPage === testData.length) {
      alert('이번 달 가장 마지막 일지입니다!');
    } else {
      setSlideDirection('slide-left');
      setNowPage(prevPage => prevPage + 1);
    }
  };

  return (
    <S.Container>
      <S.DateText>{date}의 일지</S.DateText>
      <S.SlideContainer>
        <div>
          <S.RecordContainer></S.RecordContainer>
        </div>
        <div>
          <S.MainRecordContainer>
            <S.LeftButton src={ExpandLeft} onClick={prevButtonClick} />

            <S.RecordContentsContainer
              className={slideDirection}
              onAnimationEnd={handleAnimationEnd}>
              <S.PreviewImage src={currentVisibleData.recordImg} />
              <S.LocationText>{currentVisibleData.location}</S.LocationText>
              <S.TitleText>{currentVisibleData.title}</S.TitleText>
              <S.WeatherContainer>
                <S.WeatherText>{currentVisibleData.weather}</S.WeatherText>
                <S.FeelingText>{currentVisibleData.feeling}</S.FeelingText>
              </S.WeatherContainer>
              <S.ContentText>{currentVisibleData.content}</S.ContentText>
            </S.RecordContentsContainer>

            <S.RightButton src={ExpandRight} onClick={nextButtonClick} />
          </S.MainRecordContainer>
        </div>
        <div>
          <S.RecordContainer></S.RecordContainer>
        </div>
      </S.SlideContainer>
      <S.AddButton>+</S.AddButton>
    </S.Container>
  );
};

export default DailyRecordPage;
