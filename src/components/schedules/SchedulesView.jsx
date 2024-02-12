import { Schedules } from '..';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './SchedulesView.style';
import { getSchedule } from '@/apis/request/home';
import { useInfiniteQuery } from '@tanstack/react-query';

const SchedulesView = ({ startDate, endDate }) => {
  const pageSize = 5;
  const date = new Date(startDate);

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
    getNextPageParam: lastPage =>
      lastPage?.data?.data?.data.nextCursor + 1 || 0,
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
      <S.Container $showContainer={dataExists}>
        {schedulesData?.pages?.map((page, pageIndex) =>
          page?.data?.data?.data?.scheduleList.map(scheduleData => (
            <Schedules
              key={scheduleData?.scheduleId}
              data={scheduleData}
              endDate={endDate}
              refetch={refetch}
            />
          )),
        )}
      </S.Container>

      {!dataExists && <div>아직 작성한 여정이 없어요!</div>}
    </>
  );
};

export default SchedulesView;
