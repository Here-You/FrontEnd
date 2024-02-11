import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [year, setYear] = useState(parseInt(searchParams.get('year')) || 2024);
  const [month, setMonth] = useState(parseInt(searchParams.get('month')) || 2);

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
      <S.Button onClick={() => setOpen(true)}>여정 보기</S.Button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={true}
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
            position: 'relative',
          }}>
          {journey ? (
            journey?.map(
              ({ journeyId, title, diaryCount, startDate, endDate }, idx) => {
                return (
                  <BottomTravelList
                    id={journeyId}
                    title={title}
                    startDate={startDate}
                    endDate={endDate}
                    count={diaryCount}
                  />
                );
              },
            )
          ) : (
            <S.BottomAlertMessage>
              <p>아직 작성한 여정이 없습니다!</p>
            </S.BottomAlertMessage>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomScrollPage;
