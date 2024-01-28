import { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchMap from '../searchMap/SearchMap';
import * as S from './Journey.style';
import DetailPlan from './detail/DetailPlan';
import Group from '/icons/Group.svg';

const Journey = ({ data, dataLength }) => {
  const { id, title, date, group, detailSchedules } = data;
  const [isToggle, setIsToggle] = useState(false);
  const lastPlan = id === dataLength ? true : false;
  const scheduleId = 1;

  const handleOnToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <S.Container>
      <S.MainContainer onClick={handleOnToggle}>
        <S.RowContainer>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
        </S.RowContainer>
        <S.RowContainer>
          <S.Mate>
            <S.Image src={Group} />
            <SearchMap />
          </S.Mate>
          <S.DailyRecordText to={`/dailyrecord/${scheduleId}`}>
            일지 확인하기
          </S.DailyRecordText>
        </S.RowContainer>
      </S.MainContainer>

      {dataLength > 1 && dataLength !== id && (
        <S.ShortLine $isToggle={isToggle} />
      )}

      <DetailPlan
        isToggle={isToggle}
        detailData={detailSchedules}
        dataLength={dataLength}
        lastPlan={lastPlan}
      />
    </S.Container>
  );
};

export default Journey;
