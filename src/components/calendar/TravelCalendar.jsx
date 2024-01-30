import { Schedules } from '..';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './TravelCalendar.style';
import { getSchedule, loadMonthlySchedule } from '@/apis/request/home';
import { useLoadMonthlyJourney } from '@/hooks/home/useLoadMonthlyJourney';
import { useInfiniteQuery } from '@tanstack/react-query';

moment.locale('en');

const TravelCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const year = moment(endDate).format('YYYY');
  const month = moment(endDate).format('MM');
  const { data, loading, error } = useLoadMonthlyJourney(year, month);

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
    getNextPageParam: lastPage => lastPage?.data?.data.at(-1).scheduleId,
    staleTime: 60 * 1000,
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

  console.log(schedulesData);

  const changeDate = e => {
    const startDateFormat = moment(e[0]).format('YYYY/MM/DD');
    const endDateFormat = moment(e[1]).format('YYYY/MM/DD');
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  const startEndDate = [
    { startDate: '2024/01/01', endDate: '2024/01/05' },
    { startDate: '2024/01/13', endDate: '2024/01/15' },
  ];

  const tileClassName = ({ date }) => {
    for (const range of startEndDate) {
      const startDate = moment(range.startDate);
      const endDate = moment(range.endDate);

      if (moment(date).isBetween(startDate, endDate, null, '[]')) {
        return 'highlight';
      }
    }

    return '';
  };

  if (loading) {
    return <div>로딩 중</div>;
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
        <div>
          {schedulesData?.pages?.map(page =>
            page.data.data.map(schedule => (
              <Schedules
                key={schedule.scheduleId}
                data={schedule}
                dataLength={
                  page.data.data.length * schedulesData?.pages?.length
                }
              />
            )),
          )}
          {schedulesData?.pages?.length === 0 && (
            <div>아직 작성한 여정이 없어요!</div>
          )}
        </div>
      </S.HomeContentContainer>
      <div ref={ref} style={{ height: 50 }}></div>
    </S.Wrapper>
  );
};

export default TravelCalendar;
