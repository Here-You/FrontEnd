import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useLocation, useNavigate } from 'react-router-dom';

import SchedulesView from '../schedules/SchedulesView';
import * as S from './TravelCalendar.style';
import { useMonthlyJourney } from '@/hooks/home/useMonthlyJourney';
import { ErrorPage } from '@/pages';

moment.locale('en');

const TravelCalendar = ({
  clickStateDtate,
  clickEndDate,
  setJourneyInfo,
  setMonthlyInfo,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const year = moment(endDate).format('YYYY');
  const month = moment(endDate).format('MM');
  const { data, loading, error } = useMonthlyJourney(year, month);

  useEffect(() => {
    if (data) {
      data &&
        data.forEach(monthlyJourney => {
          setMonthlyInfo(prev => [
            ...prev,
            {
              startDate: monthlyJourney.startDate,
              endDate: monthlyJourney.endDate,
            },
          ]);
        });
    }
  }, [data, setMonthlyInfo]);

  const changeDate = e => {
    const startDateFormat = moment(e[0]).format('YYYY/MM/DD');
    const endDateFormat = moment(e[1]).format('YYYY/MM/DD');
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
    clickStateDtate(startDateFormat);
    clickEndDate(endDateFormat);

    const startDateFormatFind = moment(e[0]).format('YYYY-MM-DD');
    const endDateFormatFind = moment(e[1]).format('YYYY-MM-DD');

    if (startDateFormatFind && endDateFormatFind) {
      if (data) {
        const foundJourney = data.find(
          journeydata =>
            journeydata.startDate === startDateFormatFind &&
            journeydata.endDate === endDateFormatFind,
        );
        if (foundJourney) {
          setJourneyInfo(foundJourney);
        } else {
          setJourneyInfo(null);
        }
      }
    }
  };

  const startEndDate =
    data?.map(dateGroup => ({
      startDate: dateGroup.startDate,
      endDate: dateGroup.endDate,
    })) || [];

  const tileClassName = ({ date }) => {
    for (let i = 0; i < startEndDate.length; i++) {
      const range = startEndDate[i];
      const startDate = moment(range.startDate);
      const endDate = moment(range.endDate);

      if (moment(date).isBetween(startDate, endDate, null, '[]')) {
        const idClass = `id-${i}`;
        return `highlight ${idClass}`;
      }
    }

    return '';
  };

  // if (error) {
  //   return <ErrorPage />;
  // }

  if (loading) {
    return <h1>로딩중입니다. 잠시만 기다려주세요.</h1>;
  }

  return (
    <S.Wrapper>
      <S.ButtonContainer>
        <S.Button $clicked={pathname === '/'} onClick={() => navigate('/')}>
          캘린더로 보기
        </S.Button>
        <S.Button
          $clicked={pathname === '/map'}
          onClick={() => navigate(`/map?year=${year}&month=${month}`)}>
          지도로 보기
        </S.Button>
      </S.ButtonContainer>
      <S.HeaderWrapper>
        <S.Circle />
        <S.CircleWrapper>
          <h1>{moment(startDate).format('MM')}</h1>
          <S.FontWrapper>
            {moment(startDate).format('MMMM')}
            <br />
            {moment(startDate).format('YYYY')}
          </S.FontWrapper>
        </S.CircleWrapper>
      </S.HeaderWrapper>
      <S.HomeContentContainer>
        <Calendar
          locale="en"
          tileClassName={tileClassName}
          onChange={changeDate}
          formatDay={(locale, date) => moment(date).format('D')}
          selectRange={true}
        />
        {startDate ? (
          <SchedulesView startDate={startDate} endDate={endDate} />
        ) : (
          <div>일정을 보려면 달력에서 날짜를 선택하세요</div>
        )}
      </S.HomeContentContainer>
    </S.Wrapper>
  );
};

export default TravelCalendar;
