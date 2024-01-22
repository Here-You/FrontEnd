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

  const startEndDate = [
    { startDate: '2024/01/01', endDate: '2024/01/05' },
    { startDate: '2024/01/13', endDate: '2024/01/15' },
  ];

  const tileClassName = ({ date }) => {
    for (const range of startEndDate) {
      const startDate = moment(range.startDate);
      const endDate = moment(range.endDate);

      if (moment(date).isBetween(startDate, endDate, null, '[]')) {
        return 'highlight';
      }
    }

    return '';
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
        tileClassName={tileClassName}
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
