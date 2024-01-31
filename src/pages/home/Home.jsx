import { useState } from 'react';
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
  const [isClicked, setIsClicked] = useState(false);

  const handleClickAddButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.Container $dataLength={testData.length}>
      <S.CalendarContainer>
        <TravelCalendar />
        <S.JourneyButtonContainer>
          <S.EditButton $isClicked={isClicked}>여정 확인 및 수정</S.EditButton>
          <S.VerticalLine $isClicked={isClicked}>|</S.VerticalLine>
          <S.WriteButton
            onClick={journeyWriteModal.onOpen}
            $isClicked={isClicked}>
            새 여정 추가하기
          </S.WriteButton>
          <S.AddButton onClick={handleClickAddButton} $isClicked={isClicked}>
            +
          </S.AddButton>
        </S.JourneyButtonContainer>
      </S.CalendarContainer>
      <JourneyWriteModal />
    </S.Container>
  );
};

export default HomePage;
