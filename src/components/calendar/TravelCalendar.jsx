import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useLocation, useNavigate } from 'react-router-dom';

import SchedulesView from '../schedules/SchedulesView';
import * as S from './TravelCalendar.style';
import CalendarSkeleton from './skeleton/CalendarSkeleton';
import EditLight from '/icons/EditLight.svg';
import { useMonthlyJourney } from '@/hooks/home/useMonthlyJourney';
import useAuth from '@/store/useAuth';

moment.locale('en');

const TravelCalendar = ({
  clickStateDtate,
  clickEndDate,
  setJourneyInfo,
  setMonthlyInfo,
}) => {
  const { isLogin } = useAuth();
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
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const currentKey = `/calendar?year=${currentYear}&month=${currentMonth}`;

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
      } else {
        setJourneyInfo(null);
        setJourneyTitle('');
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
  const handlePrev = () => {
    const prevValue = moment(value).subtract(1, 'month').toDate();
    const prevEndValue = moment(endDate).subtract(1, 'month').toDate();
    setValue(prevValue);

    const lastDayOfPrevMonth = moment(prevValue).endOf('month').toDate();
    setEndDate(
      prevEndValue > lastDayOfPrevMonth ? lastDayOfPrevMonth : prevEndValue,
    );
  };

  const handleNext = () => {
    const nextValue = moment(value).add(1, 'month').toDate();
    const nextEndValue = moment(endDate).add(1, 'month').toDate();

    setValue(nextValue);

    const firstDayOfNextMonth = moment(nextValue).startOf('month').toDate();
    setEndDate(
      nextEndValue < firstDayOfNextMonth ? nextEndValue : firstDayOfNextMonth,
    );
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
            <S.CalendarContainer>
              <Calendar
                locale="en"
                tileClassName={tileClassName}
                onChange={changeDate}
                formatDay={(locale, date) => moment(date).format('D')}
                selectRange={true}
                value={[value, endDate]}
                prevLabel={<S.PrevBtn onClick={handlePrev}>{'<'}</S.PrevBtn>}
                nextLabel={<S.NextBtn onClick={handleNext}>{'>'}</S.NextBtn>}
              />
            </S.CalendarContainer>
            {isLogin && (
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
                    </S.JouneyInfoContainer>
                  </>
                ) : !isLogin ? (
                  <></>
                ) : (
                  <p>
                    달력에서 기간을 선택하면 저장된 일정을 확인할 수 있습니다.
                  </p>
                )}
              </S.IntroductionContainer>
            )}

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
