import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useLocation, useNavigate } from 'react-router-dom';

import SchedulesView from '../schedules/SchedulesView';
import * as S from './TravelCalendar.style';
import CalendarSkeleton from './skeleton/CalendarSkeleton';
import EditLight from '/icons/EditLight.svg';
import { useMonthlyJourney } from '@/hooks/home/useMonthlyJourney';

moment.locale('en');

const TravelCalendar = ({
  clickStateDtate,
  clickEndDate,
  setJourneyInfo,
  setMonthlyInfo,
}) => {
  const storedStartDate = localStorage.getItem('startDate');
  const storedEndDate = localStorage.getItem('endDate');

  const [value, setValue] = useState(() => {
    const storedStartDate = localStorage.getItem('startDate');
    return storedStartDate ? new Date(storedStartDate) : new Date();
  });
  const [endDate, setEndDate] = useState(() => {
    const storedEndDate = localStorage.getItem('endDate');
    return storedEndDate ? new Date(storedEndDate) : new Date();
  });
  const [journeyTitle, setJourneyTitle] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date(); // 현재 날짜
    const currentYear = currentDate.getFullYear(); // 현재 연도
    const currentMonth = currentDate.getMonth() + 1; // 현재 월 (0부터 시작하므로 +1 필요)

    // 현재 연도와 월을 문자열로 변환하여 pathname과 함께 사용하여 현재 페이지의 키를 생성
    const currentKey = `/calendar?year=${currentYear}&month=${currentMonth}`;

    // 만약 현재 페이지의 키와 pathname이 같다면 캘린더를 현재 날짜로 설정
    if (currentKey === pathname) {
      setValue(currentDate);
    }
  }, [pathname]);

  const year = moment(value).format('YYYY');
  const month = moment(value).format('MM');
  const {
    data,
    loading: calendarLoading,
    error,
  } = useMonthlyJourney(year, month);

  useEffect(() => {
    if (data) {
      data.forEach(monthlyJourney => {
        setMonthlyInfo(prev => [
          ...prev,
          {
            startDate: monthlyJourney.startDate,
            endDate: monthlyJourney.endDate,
          },
        ]);
        if (
          storedStartDate === monthlyJourney.startDate &&
          storedEndDate === monthlyJourney.endDate
        ) {
          setJourneyTitle(monthlyJourney.title);
        }
      });
    }
  }, [data, storedStartDate, storedEndDate, setMonthlyInfo]);

  const changeDate = e => {
    const startDateFormat = moment(e[0]).format('YYYY/MM/DD');
    const endDateFormat = moment(e[1]).format('YYYY/MM/DD');
    setValue(e[0]);
    setEndDate(e[1]);
    clickStateDtate(startDateFormat);
    clickEndDate(endDateFormat);

    const startDateFormatFind = moment(e[0]).format('YYYY-MM-DD');
    const endDateFormatFind = moment(e[1]).format('YYYY-MM-DD');

    if (startDateFormatFind && endDateFormatFind) {
      localStorage.setItem('startDate', startDateFormatFind);
      localStorage.setItem('endDate', endDateFormatFind);
      if (data) {
        const foundJourney = data.find(
          journeydata =>
            journeydata.startDate === startDateFormatFind &&
            journeydata.endDate === endDateFormatFind,
        );
        if (foundJourney) {
          setJourneyInfo(foundJourney);
          setJourneyTitle(foundJourney.title);
        } else {
          setJourneyInfo(null);
          setJourneyTitle('');
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

  console.log(value);

  // prevLabel 이벤트 핸들러
  const handlePrev = () => {
    const newValue = moment(value).subtract(1, 'month').toDate(); // 이전 달로 설정
    setValue(newValue); // state 업데이트
  };

  // nextLabel 이벤트 핸들러
  const handleNext = () => {
    const newValue = moment(value).add(1, 'month').toDate(); // 다음 달로 설정
    setValue(newValue); // state 업데이트
  };

  return (
    <>
      {calendarLoading ? (
        <CalendarSkeleton />
      ) : (
        <S.Wrapper>
          <S.ButtonContainer>
            <S.Button
              $clicked={pathname === '/calendar'}
              onClick={() => navigate('/calendar')}>
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
              <h1>{moment(value).format('MM')}</h1>
              <S.FontWrapper>
                {moment(value).format('MMMM')}
                <br />
                {moment(value).format('YYYY')}
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
              value={[value, endDate]}
              prevLabel={
                <S.changeDateBtn onClick={handlePrev}>{'<'}</S.changeDateBtn>
              }
              nextLabel={
                <S.changeDateBtn onClick={handleNext}>{'>'}</S.changeDateBtn>
              }
            />
            <S.IntroductionContainer>
              {storedStartDate && storedEndDate ? (
                <>
                  <S.JouneyInfoContainer>
                    {journeyTitle ? (
                      <p>🏖️ 선택된 여정 : {journeyTitle}</p>
                    ) : (
                      <p>새로운 여정을 추가하고 여행 일정을 생성하세요!</p>
                    )}

                    <p>
                      {moment(value).format('YYYY/MM/DD')} ~{' '}
                      {moment(endDate).format('YYYY/MM/DD')}
                    </p>
                  </S.JouneyInfoContainer>
                  <S.JouneyInfoContainer>
                    <h3>
                      Tip.{'\t'}
                      <span>
                        일지 작성 <S.Image src={EditLight} />
                      </span>
                      버튼을 눌러 일지를 작성하면 지도에서
                      <br />
                      이미지로 표시된 위치를 확인할 수 있습니다.
                    </h3>
                    <input value={moment(value).format('YYYY/MM/DD') || ''} />
                    <input value={moment(endDate).format('YYYY/MM/DD') || ''} />
                  </S.JouneyInfoContainer>
                </>
              ) : (
                <p>
                  달력에서 기간을 선택하면 저장된 일정을 확인할 수 있습니다.
                </p>
              )}
            </S.IntroductionContainer>

            <SchedulesView
              startDate={moment(value).format('YYYY/MM/DD')}
              endDate={moment(endDate).format('YYYY/MM/DD')}
              journeyTitle={journeyTitle}
            />
          </S.HomeContentContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default TravelCalendar;
