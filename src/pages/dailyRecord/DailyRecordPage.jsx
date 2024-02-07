import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import * as S from './DailyRecordPage.style';
import ExpandLeft from '/icons/ExpandLeft.svg';
import ExpandRight from '/icons/ExpandRight.svg';
import PenGreen from '/icons/PenGreen.svg';
import { getDiary } from '@/apis/request/home';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';
import { useGetDiaryMap } from '@/hooks/home/useGetDiaryMap';
import { useQuery } from '@tanstack/react-query';

const DailyRecordPage = () => {
  const { search } = useLocation();
  const { scheduleId } = useParams();

  const params = new URLSearchParams(search);
  const journeyId = params.get('journeyId');

  const { data: diaryData, error, loading } = useGetDiaryMap(journeyId); //전체 데이터 요청
  const [currentVisibleData, setCurrentVisibleData] = useState({}); //현재 화면에 보여주는 데이터
  const [slideDirection, setSlideDirection] = useState(null);
  const [nowPage, setNowPage] = useState(parseInt(scheduleId)); //일지 하나당 데이터 id

  const { data } = useQuery({
    queryKey: ['diaries', nowPage],
    queryFn: () => getDiary(nowPage),
  });

  const date = useMemo(() => {
    if (!diaryData) {
      return null;
    } else {
      const date = diaryData?.[nowPage - 1]?.date.split('T')[0].split('-');
      return date && `${date[0]}년 ${date[1]}월 ${date[2]}일`;
    }
  }, [diaryData, nowPage]);

  useEffect(() => {
    diaryData && setCurrentVisibleData(diaryData[nowPage - 1]);
  }, [diaryData, nowPage]);

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
    if (nowPage === diaryData?.length) {
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
              <S.PreviewImage src={currentVisibleData?.diaryImage?.imageUrl} />
              <S.LocationText>
                {currentVisibleData?.diary?.place}
              </S.LocationText>
              <S.TitleText>{currentVisibleData?.diary?.title}</S.TitleText>
              <S.WeatherContainer>
                {WEATHER_ICON_LIST.map(item => {
                  if (item.iconName === currentVisibleData?.diary?.weather) {
                    return <S.Icon src={item.iconUrl} />;
                  }
                })}
                {MOOD_ICON_LIST.map(item => {
                  if (item.iconName === currentVisibleData?.diary?.mood) {
                    return <S.Icon src={item.iconUrl} />;
                  }
                })}
              </S.WeatherContainer>
              <S.ContentText>
                {currentVisibleData?.diary?.content}
              </S.ContentText>
            </S.RecordContentsContainer>

            <S.RightButton src={ExpandRight} onClick={nextButtonClick} />
          </S.MainRecordContainer>
        </div>
        <div>
          <S.RecordContainer></S.RecordContainer>
        </div>
      </S.SlideContainer>
      <S.AddButton to={`/dailyrecord/${nowPage}/edit`}>
        <S.PenIcon src={PenGreen} />
      </S.AddButton>
    </S.Container>
  );
};

export default DailyRecordPage;
