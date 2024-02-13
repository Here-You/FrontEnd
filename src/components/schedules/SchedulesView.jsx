import { Schedules } from '..';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import * as S from './SchedulesView.style';
import { getSchedule } from '@/apis/request/home';
import { useInfiniteQuery } from '@tanstack/react-query';

const SchedulesView = ({ startDate, endDate }) => {
  const accessToken = localStorage.getItem('x-access-token');
  const pageSize = 5;
  const date = new Date(startDate);
  const isStartDateDateInstance = startDate instanceof Date;

  const formattedDate = format(date, 'yyyy-MM-dd');

  const {
    data: schedulesData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['schedules', startDate],
    queryFn: ({ pageParam = 1 }) =>
      getSchedule(formattedDate, pageParam, pageSize),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (!lastPage?.data?.data?.data?.meta?.hasNextData) {
        return null;
      } else {
        return lastPage?.data?.data?.data?.meta?.cursor + 1;
      }
    },
    staleTime: 60 * 1000,
  });

  const dataExists = schedulesData?.pages?.some(page => page?.data?.data?.data);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      {!isStartDateDateInstance && (
        <S.Container $showContainer={dataExists}>
          {schedulesData?.pages?.map((page, pageIndex) =>
            page?.data?.data?.data?.paginatedSchedules.map(scheduleData => (
              <Schedules
                key={scheduleData?.scheduleId}
                data={scheduleData}
                endDate={endDate}
                refetch={refetch}
              />
            )),
          )}
          <div style={{ height: 10 }} ref={ref}></div>
        </S.Container>
      )}

      {!accessToken && (
        <Link style={{ textDecoration: 'none' }} to={'/login'}>
          <S.IntroMessage>로그인 후 여정을 작성해보세요!</S.IntroMessage>
        </Link>
      )}

      {accessToken && !dataExists && <div>아직 작성한 여정이 없어요!</div>}
      {accessToken && dataExists && isStartDateDateInstance && (
        <div>달력에서 기간을 선택하고, 일정을 확인하세요!</div>
      )}
    </>
  );
};

export default SchedulesView;
