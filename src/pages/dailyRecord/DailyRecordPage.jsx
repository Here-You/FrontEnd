import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './DailyRecordPage.style';
import ExpandLeft from '/icons/ExpandLeft.svg';
import ExpandRight from '/icons/ExpandRight.svg';
import PenGreen from '/icons/PenGreen.svg';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';
import { useGetDiary } from '@/hooks/home/useGetDiary';

const DailyRecordPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const scheduleId = params.get('scheduleid');
  const recordId = params.get('recordid') || 1;
  const { data, error, loading } = useGetDiary(recordId); //전체 데이터 요청
  const recordData = data[0];
  const [currentVisibleData, setCurrentVisibleData] = useState({}); //현재 화면에 보여주는 데이터
  const [slideDirection, setSlideDirection] = useState(null);
  const [nowPage, setNowPage] = useState(parseInt(recordId)); //일지 하나당 데이터 id

  const date = useMemo(() => {
    if (!recordData) {
      return null;
    } else {
      const date = recordData?.created.split('T')[0].split('-');
      return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
    }
  }, [recordData]);

  useEffect(() => {
    setCurrentVisibleData(data[nowPage - 1]);
  }, [data, nowPage]);

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
    if (nowPage === data.length) {
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
              <S.PreviewImage
                src={currentVisibleData?.diary_image?.image_key}
              />
              <S.LocationText>{currentVisibleData?.place}</S.LocationText>
              <S.TitleText>{currentVisibleData?.title}</S.TitleText>
              <S.WeatherContainer>
                {WEATHER_ICON_LIST.map(item => {
                  if (item.iconName === currentVisibleData?.weather) {
                    return <S.Icon src={item.iconUrl} />;
                  }
                })}
                {MOOD_ICON_LIST.map(item => {
                  if (item.iconName === currentVisibleData?.mood) {
                    return <S.Icon src={item.iconUrl} />;
                  }
                })}
              </S.WeatherContainer>
              <S.ContentText>{currentVisibleData?.content}</S.ContentText>
            </S.RecordContentsContainer>

            <S.RightButton src={ExpandRight} onClick={nextButtonClick} />
          </S.MainRecordContainer>
        </div>
        <div>
          <S.RecordContainer></S.RecordContainer>
        </div>
      </S.SlideContainer>
      <S.AddButton to={`/dailyrecord/${scheduleId}/edit/${nowPage}`}>
        <S.PenIcon src={PenGreen} />
      </S.AddButton>
    </S.Container>
  );
};

export default DailyRecordPage;
