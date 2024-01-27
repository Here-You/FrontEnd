import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Home.style';
import { Journey, TravelCalendar } from '@/components';
import testData from '@/constants/journey';
import { useLoadMonthlyJourney } from '@/hooks/home/useLoadMonthlyJourney';

const HomePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.Container $dataLength={testData.length}>
      <S.CalendarContainer>
        <TravelCalendar />
        <S.JourneyWrapper>
          {testData.map(item => (
            <Journey key={item.id} data={item} dataLength={testData.length} />
          ))}
        </S.JourneyWrapper>
        <S.AddButton>+</S.AddButton>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default HomePage;
