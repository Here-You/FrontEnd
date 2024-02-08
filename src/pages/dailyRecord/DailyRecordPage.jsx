import { ErrorPage } from '..';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './DailyRecordPage.style';
import PenGreen from '/icons/PenGreen.svg';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';
import { useGetDiary } from '@/hooks/home/useGetDiary';

const DailyRecordPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const scheduleId = params.get('scheduleId');
  const { data: diaryData, loading, error } = useGetDiary(scheduleId);

  const Date = useMemo(() => {
    const date = diaryData?.date?.split('-');
    return { date };
  }, [diaryData]);

  if (loading) {
    return <div>로딩 중입니다..</div>;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <S.Container>
      <S.DateContainer>
        <S.YearText>{Date.date && Date?.date[0]}</S.YearText>
        <S.DateText>
          {Date.date && Date?.date[1]}, {Date.date && Date?.date[2]}
        </S.DateText>
      </S.DateContainer>
      <S.RecordContainer>
        <S.RecordImageContainer>
          <S.PreviewImage src={diaryData?.imageUrl} />
        </S.RecordImageContainer>
        <S.LocationText>{diaryData?.place}</S.LocationText>
        <S.TitleText>{diaryData?.title}</S.TitleText>

        <S.WeatherContainer>
          {WEATHER_ICON_LIST.map(item => {
            if (item.iconName === diaryData?.weather) {
              return <S.Icon key={item.id} src={item.iconUrl} />;
            }
          })}
          {MOOD_ICON_LIST.map(item => {
            if (item.iconName === diaryData?.mood) {
              return <S.Icon key={item.id} src={item.iconUrl} />;
            }
          })}
        </S.WeatherContainer>
        <S.ContentText>{diaryData?.content}</S.ContentText>
      </S.RecordContainer>

      <S.AddButton
        to={`/dailyrecord/${diaryData?.id}/edit?scheduleId=${scheduleId}`}>
        <S.PenIcon src={PenGreen} />
      </S.AddButton>
    </S.Container>
  );
};

export default DailyRecordPage;
