import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';

import * as S from './DailyRecordListPage.style';
import DailyRecordListSkeleton from './skeleton/DailyRecordListSkeleton';
import ExpandLeft from '/icons/ExpandLeft.svg';
import ExpandRight from '/icons/ExpandRight.svg';
import PenGreen from '/icons/PenGreen.svg';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';
import { useGetDiaryMap } from '@/hooks/home/useGetDiaryMap';

const DailyRecordListPage = () => {
  const { journeyId } = useParams();

  const { data: diaryData, error, loading } = useGetDiaryMap(journeyId);
  const [validDiaryData, setValidDiaryData] = useState([]);
  const [currentVisibleData, setCurrentVisibleData] = useState({});
  const [slideDirection, setSlideDirection] = useState(null);
  const [nowPage, setNowPage] = useState(0);

  const date = useMemo(() => {
    if (!validDiaryData) {
      return null;
    } else {
      const date = validDiaryData?.[nowPage]?.date.split('T')[0].split('-');
      return date && `${date[0]}년 ${date[1]}월 ${date[2]}일`;
    }
  }, [validDiaryData, nowPage]);

  useEffect(() => {
    const validData = diaryData?.diaryList?.filter(s => s !== null);
    // console.log('실제로 존재하는 일지: ', validData);
    setValidDiaryData(validData);
  }, [diaryData]);

  useEffect(() => {
    validDiaryData && setCurrentVisibleData(validDiaryData[nowPage]);
  }, [validDiaryData, nowPage]);

  const handleAnimationEnd = () => {
    setSlideDirection(null);
  };

  const prevButtonClick = () => {
    if (nowPage === 0) {
      toast('이 여정의 가장 첫 일지입니다!');
    } else {
      setSlideDirection('slide-right');
      setNowPage(prevPage => prevPage - 1);
    }
  };

  const nextButtonClick = () => {
    if (nowPage === validDiaryData?.length - 1) {
      toast('이 여정의 가장 마지막 일지입니다!');
    } else {
      setSlideDirection('slide-left');
      setNowPage(prevPage => prevPage + 1);
    }
  };

  if (!validDiaryData) {
    return <div>로딩 중입니다..</div>;
  }

  return (
    <>
      {!loading ? (
        <DailyRecordListSkeleton />
      ) : (
        <S.Container>
          <S.DateText>{date}의 일지</S.DateText>

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

          <S.AddButton
            to={`/dailyrecord/${currentVisibleData?.diary?.id}/edit?scheduleId=${currentVisibleData?.scheduleId}`}>
            <S.PenIcon src={PenGreen} />
          </S.AddButton>
        </S.Container>
      )}
    </>
  );
};

export default DailyRecordListPage;
