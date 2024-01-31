import Modal from '../Modal/Modal';
import * as S from './JourneyWriteModal.style';
import useJourneyModal from '@/hooks/modal/useJourneyModal';

const JourneyWriteModal = () => {
  const journeyWriteModal = useJourneyModal();

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>여정 제목</S.Title>
        <S.Input />
      </S.ContentContainer>
      <S.ContentContainer>
        <S.Title>시작 날짜</S.Title>
        <S.Date>2024/01/11</S.Date>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.Title>끝 날짜</S.Title>
        <S.Date>2024/01/15</S.Date>
      </S.ContentContainer>
    </S.Container>
  );

  const onSubmit = () => {};

  const deleteJourney = () => {};

  return (
    <Modal
      isOpen={journeyWriteModal.isOpen}
      onClose={journeyWriteModal.onClose}
      onSubmit={onSubmit}
      actionLabel="여정 저장하기"
      body={BodyContent}
      secondaryAction={deleteJourney}
      secondaryActionLabel="여정 삭제하기"
    />
  );
};

export default JourneyWriteModal;
