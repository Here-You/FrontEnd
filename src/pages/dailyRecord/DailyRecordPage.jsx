import { format } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './DailyRecordPage.style';
import { SCHEDULE_DATA } from './data';
import ExpandLeft from '/icons/ExpandLeft.svg';
import ExpandRight from '/icons/ExpandRight.svg';
import PenGreen from '/icons/PenGreen.svg';

const DailyRecordPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const scheduleId = params.get('scheduleid');
  const recordId = params.get('recordid') || 1;
  const recordData = SCHEDULE_DATA[0].dailyRecordList; //전체 데이터
  const [currentVisibleData, setCurrentVisibleData] = useState({}); //현재 화면에 보여주는 데이터
  const [slideDirection, setSlideDirection] = useState(null);
  const [nowPage, setNowPage] = useState(parseInt(recordId)); //일지 하나당 데이터 id

  const date = useMemo(() => {
    if (!currentVisibleData.date) {
      return null;
    }

    return `${format(currentVisibleData?.date, 'yyyy년 MM월 dd일')}`;
  }, [currentVisibleData?.date]);

  useEffect(() => {
    setCurrentVisibleData(recordData[nowPage - 1]);
  }, [nowPage]);

  const handleAnimationEnd = () => {
    setSlideDirection(null);
  };

  const prevButtonClick = () => {
    if (nowPage === 1) {
      alert('이 여정의 가장 첫 일지입니다!');
    } else {
      setSlideDirection('slide-right');
      setNowPage(prevPage => prevPage - 1);
    }
  };

  const nextButtonClick = () => {
    if (nowPage === recordData.length) {
      alert('이 여정의 가장 마지막 일지입니다!');
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
      <S.AddButton to={`/dailyrecord/edit/${scheduleId}/${nowPage}`}>
        <S.PenIcon src={PenGreen} />
      </S.AddButton>
    </S.Container>
  );
};

export default DailyRecordPage;
