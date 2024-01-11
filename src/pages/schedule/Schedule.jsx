import { useState } from 'react';

import * as S from './Schedule.style';
import { Journey, TravelCalendar } from '@/components';
import testData from '@/constants/journey';

const SchedulePage = () => {
  const [layout, setLayout] = useState('Calendar');

  return (
    <S.Container $dataLength={testData.length}>
      <S.ButtonContainer>
        <S.Button
          clicked={layout === 'Calendar'}
          onClick={() => setLayout('Calendar')}>
          캘린더로 보기
        </S.Button>
        <S.Button clicked={layout === 'Map'} onClick={() => setLayout('Map')}>
          지도로 보기
        </S.Button>
      </S.ButtonContainer>
      {layout === 'Calendar' ? (
        <S.CalendarWrapper>
          <TravelCalendar />
          <S.JourneyWrapper>
            {testData.map(item => (
              <Journey key={item.id} data={item} dataLength={testData.length} />
            ))}
          </S.JourneyWrapper>
          <S.AddButton>+</S.AddButton>
        </S.CalendarWrapper>
      ) : (
        <S.MapWrapper>Map</S.MapWrapper>
      )}
    </S.Container>
  );
};

export default SchedulePage;
