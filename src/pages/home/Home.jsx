import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Home.style';
import { TravelCalendar } from '@/components';
import testData from '@/constants/journey';

const HomePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.Container $dataLength={testData.length}>
      <S.CalendarContainer>
        <TravelCalendar />
        <S.AddButton>+</S.AddButton>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default HomePage;
