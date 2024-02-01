import moment from 'moment';
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
  const [monthlyInfo, setMonthlyInfo] = useState([]);

  const checkOverlap = (startDate, endDate, monthlyInfo) => {
    // 선택한 기간을 moment 객체로 변환
    const selectedStart = moment(startDate);
    const selectedEnd = moment(endDate);
    // monthlyInfo에 있는 각 기간과 비교하여 겹치는지 확인
    for (let i = 0; i < monthlyInfo.length; i++) {
      const { startDate: start, endDate: end } = monthlyInfo[i];
      const monthlyStart = moment(start);
      const monthlyEnd = moment(end);
      // 만약 선택한 기간이 monthlyInfo에 있는 기간과 겹친다면 true를 반환
      if (
        selectedStart.isBetween(monthlyStart, monthlyEnd, undefined, '[]') ||
        selectedEnd.isBetween(monthlyStart, monthlyEnd, undefined, '[]') ||
        monthlyStart.isBetween(selectedStart, selectedEnd, undefined, '[]') ||
        monthlyEnd.isBetween(selectedStart, selectedEnd, undefined, '[]')
      ) {
        return true;
      }
    }
    // 겹치는 기간이 없을 경우 false를 반환
    return false;
  };

  const handleEditJourney = () => {
    if (!startDate || !endDate) {
      alert('먼저 달력에서 기간을 선택해주세요!');
    } else if (!journeyInfo) {
      alert('저장된 일정이 없습니다!');
    } else {
      journeyEditModal.onOpen();
    }
  };

  const handleAddJourney = () => {
    const checkResult = checkOverlap(startDate, endDate, monthlyInfo);
    if (journeyInfo || checkResult) {
      alert('선택한 기간 내에 이미 저장된 여정이 있습니다.');
    } else if (!startDate || !endDate) {
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
          setMonthlyInfo={setMonthlyInfo}
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
      <JourneyEditModal
        journeyId={journeyInfo?.journeyId}
        journeyTitle={journeyInfo?.journeyTitle}
        startDate={journeyInfo?.dateGroup?.startDate}
        endDate={journeyInfo?.dateGroup?.endDate}
      />
    </S.Container>
  );
};

export default HomePage;
