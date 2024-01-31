import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Home.style';
import { TravelCalendar } from '@/components';
import JourneyWriteModal from '@/components/modal/JourneyModal/JourneyWriteModal';
import testData from '@/constants/journey';
import useJourneyModal from '@/hooks/modal/useJourneyModal';

const HomePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const journeyWriteModal = useJourneyModal();

  return (
    <S.Container $dataLength={testData.length}>
      <S.CalendarContainer>
        <TravelCalendar />
        <S.AddButton onClick={journeyWriteModal.onOpen}>+</S.AddButton>
      </S.CalendarContainer>
      <JourneyWriteModal />
    </S.Container>
  );
};

export default HomePage;
