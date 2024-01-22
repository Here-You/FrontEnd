import { useState } from 'react';

import * as S from './Home.style';
import { Journey, TravelCalendar, TravelMap } from '@/components';
import BottomSheet from '@/components/bottomSheet/BottomScrollPage';
import BottomScrollPage from '@/components/bottomSheet/BottomScrollPage';
import testData from '@/constants/journey';

const HomePage = () => {
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
        <S.CalendarContainer>
          <TravelCalendar />
          <S.JourneyWrapper>
            {testData.map(item => (
              <Journey key={item.id} data={item} dataLength={testData.length} />
            ))}
          </S.JourneyWrapper>
          <S.AddButton>+</S.AddButton>
        </S.CalendarContainer>
      ) : (
        <S.MapContainer>
          <TravelMap />
          <BottomScrollPage />
        </S.MapContainer>
      )}
    </S.Container>
  );
};

export default HomePage;
