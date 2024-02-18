import { Schedules } from '..';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import * as S from './SchedulesView.style';
import SchedulesViewSkeleton from './skeleton/SchedulesViewSkeleton';
import { getSchedule } from '@/apis/request/home';
import useAuth from '@/store/useAuth';
import { useInfiniteQuery } from '@tanstack/react-query';

const SchedulesView = ({ startDate, endDate, journeyTitle }) => {
  const { isLogin } = useAuth();
  const pageSize = 5;
  const date = new Date(startDate);

  const formattedDate = format(date, 'yyyy-MM-dd');

  const {
    data: schedulesData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
    isLoading,
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
        return lastPage?.data?.data?.data?.meta?.cursor;
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
      {isLoading &&
        journeyTitle &&
        new Array(3).fill(0).map(item => <SchedulesViewSkeleton />)}
      {!isLoading && journeyTitle && (
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

      {!isLogin && (
        <Link style={{ textDecoration: 'none' }} to={'/login'}>
          <S.IntroMessage>로그인 후 여정을 작성해보세요!</S.IntroMessage>
        </Link>
      )}
      {/* 
      {!isLoading && accessToken && !dataExists && (
        <div>아직 작성한 여정이 없어요!</div>
      )}
      {!isLoading && accessToken && dataExists && journeyTitle && (
        <div>달력에서 기간을 선택하고, 일정을 확인하세요!</div>
      )} */}
    </>
  );
};

export default SchedulesView;
