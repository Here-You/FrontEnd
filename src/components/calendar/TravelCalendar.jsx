import { Schedules } from '..';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './TravelCalendar.style';
import { getSchedule } from '@/apis/request/home';
import { useLoadMonthlyJourney } from '@/hooks/home/useLoadMonthlyJourney';
import { ErrorPage } from '@/pages';
import { useInfiniteQuery } from '@tanstack/react-query';

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
  const { data, loading, error } = useLoadMonthlyJourney(year, month);

  useEffect(() => {
    if (data) {
      data.monthlyJourneys &&
        data.monthlyJourneys.forEach(monthlyJourney => {
          setMonthlyInfo(prev => [...prev, monthlyJourney.dateGroup]);
        });
    }
  }, [data, setMonthlyInfo]);

  const journeyId = 1;

  const {
    data: schedulesData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ['schedules', journeyId],
    queryFn: ({ pageParam = 1 }) => getSchedule(journeyId, pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage?.data?.data?.at(-1).scheduleId,
    staleTime: 60 * 1000,
    // enabled,  // 처리 필요
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

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
      const foundJourney = data.monthlyJourneys.find(
        journeydata =>
          journeydata.dateGroup.startDate === startDateFormatFind &&
          journeydata.dateGroup.endDate === endDateFormatFind,
      );
      if (foundJourney) {
        setJourneyInfo(foundJourney);
      } else {
        setJourneyInfo(null);
      }
    }
  };

  const startEndDate =
    data?.monthlyJourneys?.map(({ dateGroup }) => ({
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
        <S.Button clicked={pathname === '/'} onClick={() => navigate('/')}>
          캘린더로 보기
        </S.Button>
        <S.Button
          clicked={pathname === '/map'}
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
        <S.SchedulesContainer>
          {schedulesData?.pages?.map(page =>
            page?.data?.data?.map(schedule => (
              <Schedules
                key={schedule.scheduleId}
                data={schedule}
                dataLength={
                  page.data.data.length * schedulesData?.pages?.length
                }
              />
            )),
          )}
          {schedulesData?.pages?.length === 0 ||
            (!schedulesData && <div>아직 작성한 여정이 없어요!</div>)}
        </S.SchedulesContainer>
      </S.HomeContentContainer>
    </S.Wrapper>
  );
};

export default TravelCalendar;
