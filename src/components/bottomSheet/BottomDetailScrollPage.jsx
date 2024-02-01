import { Schedules } from '..';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router-dom';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomDetailScrollPage.style';
import { getSchedule } from '@/apis/request/home';
import { useInfiniteQuery } from '@tanstack/react-query';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomDetailScrollPage = ({ journeyInfo }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { journeyId } = useParams();

  const journeyTitle = journeyInfo?.journey_title;
  const scheduleLocations = journeyInfo?.schedule_locations;
  const startDate = journeyInfo?.date_group_id.startDate;
  const endDate = journeyInfo?.date_group_id.endDate;

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
    // enabled,  // 처리 필요
  });

  console.log(schedulesData);

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
        <div ref={ref} style={{ height: 50 }}></div>
      </BottomSheet>
    </>
  );
};

export default BottomDetailScrollPage;
