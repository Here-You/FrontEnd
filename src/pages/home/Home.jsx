import { useNavigate } from 'react-router-dom';

import * as S from './Home.style';
import { Journey, TravelCalendar } from '@/components';
import testData from '@/constants/journey';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <S.Container $dataLength={testData.length}>
      <S.ButtonContainer>
        <S.Button onClick={() => navigate('/')}>캘린더로 보기</S.Button>
        <S.Button onClick={() => navigate('/map')}>지도로 보기</S.Button>
      </S.ButtonContainer>
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
