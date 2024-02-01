import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Home.style';
import { TravelCalendar } from '@/components';
import JourneyEditModal from '@/components/modal/journeyEdit/JourneyEditModal';
import JourneyWriteModal from '@/components/modal/journeyWriteModal/JourneyWriteModal';
import testData from '@/constants/journey';
import useJourneyEditModal from '@/hooks/modal/useJourneyEditModal';
import useJourneyWriteModal from '@/hooks/modal/useJourneyWriteModal';

const HomePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const journeyWriteModal = useJourneyWriteModal();
  const journeyEditModal = useJourneyEditModal();
  const [isClicked, setIsClicked] = useState(false);
  const [startDate, setStateDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [journeyInfo, setJourneyInfo] = useState(null);

  const handleEditJourney = () => {
    if (!journeyInfo) {
      alert('먼저 달력에서 날짜를 선택해주세요!');
    } else {
      journeyEditModal.onOpen();
    }
  };

  const handleAddJourney = () => {
    if (!startDate || !endDate) {
      alert('먼저 달력에서 기간을 선택해주세요!');
    } else {
      journeyWriteModal.onOpen();
    }
  };

  const handleClickAddButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.Container $dataLength={testData.length}>
      <S.CalendarContainer>
        <TravelCalendar
          clickStateDtate={setStateDate}
          clickEndDate={setEndDate}
          setJourneyInfo={setJourneyInfo}
        />
        <S.JourneyButtonContainer>
          <S.EditButton $isClicked={isClicked} onClick={handleEditJourney}>
            여정 확인 및 수정
          </S.EditButton>
          <S.VerticalLine $isClicked={isClicked}>|</S.VerticalLine>
          <S.WriteButton onClick={handleAddJourney} $isClicked={isClicked}>
            새 여정 추가하기
          </S.WriteButton>
          <S.AddButton onClick={handleClickAddButton} $isClicked={isClicked}>
            +
          </S.AddButton>
        </S.JourneyButtonContainer>
      </S.CalendarContainer>
      <JourneyWriteModal startDate={startDate} endDate={endDate} />
      <JourneyEditModal journeyInfo={journeyInfo} />
    </S.Container>
  );
};

export default HomePage;
