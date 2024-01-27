import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomScrollPage.style';
import BottomTravelList from './bottomTravelList/BottomTravelList';
import LeftIcon from '/icons/left.svg';
import RightIcon from '/icons/right.svg';
import { useMonthlyJourney } from '@/hooks/home/useMonthlyJourney';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomScrollPage = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState(parseInt(searchParams.get('year')));
  const [month, setMonth] = useState(parseInt(searchParams.get('month')));

  const { data: journey, loading, error } = useMonthlyJourney(year, month);

  if (loading) {
    return <div>로딩 중 입니다...</div>;
  }

  if (error) {
    return <div>Error 발생 {error}</div>;
  }

  const handleDecrease = () => {
    let newMonth, newYear;

    if (month > 1) {
      newMonth = month - 1;
      newYear = year;
    } else {
      newMonth = 12;
      newYear = year - 1;
    }

    setSearchParams({ year: newYear, month: newMonth });
    setMonth(newMonth);
    setYear(newYear);
  };

  const handleIncrease = () => {
    let newMonth, newYear;

    if (month < 12) {
      newMonth = month + 1;
      newYear = year;
    } else {
      newMonth = 1;
      newYear = year + 1;
    }

    setSearchParams({ year: newYear, month: newMonth });
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={false}
        snapPoints={({ maxHeight }) => [maxHeight * 0 + 500]}
        header={
          <S.HeaderWrapper>
            <h3>내 여정 리스트</h3>
            <S.HeaderContainer>
              <S.Image src={LeftIcon} onClick={handleDecrease} />
              <h3>
                {year}년 {month}월
              </h3>
              <S.Image src={RightIcon} onClick={handleIncrease} />
            </S.HeaderContainer>
          </S.HeaderWrapper>
        }>
        <div
          style={{
            height: '100%',
          }}>
          {journey[0]?.journey_list?.map(
            ({ journey_id, journey_title, diary_count }, idx) => {
              return (
                <BottomTravelList
                  title={journey_title}
                  // startDate={startDate}
                  // endDate={endDate}
                  count={diary_count}
                />
              );
            },
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomScrollPage;
