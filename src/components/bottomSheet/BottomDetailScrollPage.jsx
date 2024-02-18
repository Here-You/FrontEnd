import { Schedules } from '..';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomDetailScrollPage.style';
import { getSchedule } from '@/apis/request/home';
import { useInfiniteQuery } from '@tanstack/react-query';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomDetailScrollPage = ({ startDate, endDate }) => {
  const pageSize = 5;
  const [open, setOpen] = useState(false);

  const {
    data: schedulesData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['schedules', startDate],
    queryFn: ({ pageParam = 1 }) => getSchedule(startDate, pageParam, pageSize),
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
      <S.Button onClick={() => setOpen(true)}>여정 보기</S.Button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={true}
        snapPoints={({ maxHeight }) => [maxHeight * 0 + 500]}
        header={
          <S.HeaderWrapper>
            <S.CloseButton onClick={() => setOpen(false)}>X</S.CloseButton>
          </S.HeaderWrapper>
        }>
        <div
          style={{
            height: '100%',
            marginTop: '20px',
          }}>
          {schedulesData?.pages?.map(page =>
            page?.data?.data?.data?.paginatedSchedules.map(scheduleData => (
              <Schedules
                key={scheduleData.scheduleId}
                data={scheduleData}
                endDate={endDate}
                refetch={refetch}
              />
            )),
          )}
          <div style={{ height: 10 }} ref={ref}></div>
          {schedulesData?.pages?.length === 0 && (
            <div>아직 작성한 여정이 없어요!</div>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomDetailScrollPage;
