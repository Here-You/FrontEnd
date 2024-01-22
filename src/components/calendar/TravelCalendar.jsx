import moment from 'moment';
import { useState } from 'react';
import Calendar from 'react-calendar';

import * as S from './TravelCalendar.style';

moment.locale('en');

const TravelCalendar = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const changeDate = e => {
    const startDateFormat = moment(e[0]).format('YYYY/MM/DD');
    const endDateFormat = moment(e[1]).format('YYYY/MM/DD');
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.Circle />
        <S.CircleWrapper>
          <h1>{moment(startDate).format('MM')}</h1>
          {/* January 2024 */}
          <S.FontWrapper>
            {moment(startDate).format('MMMM')}
            <br />
            {moment(startDate).format('YYYY')}
          </S.FontWrapper>
        </S.CircleWrapper>
      </S.HeaderWrapper>
      <Calendar
        locale="en"
        onChange={changeDate}
        formatDay={(locale, date) => moment(date).format('D')}
        selectRange={true}
      />
      {/* <div>출발일: {startDate}</div>
      <div>종료일: {endDate}</div> */}
    </S.Wrapper>
  );
};

export default TravelCalendar;
