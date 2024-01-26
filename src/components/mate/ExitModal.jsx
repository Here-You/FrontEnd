import * as S from './ExitModal.style';

const ExitModal = ({ onClose }) => {
  return (
    <S.ModalBase>
      <S.ModalContainer>
        <S.SpanContainer>
          <span>제주여행을 떠나며</span>
          <span>해당 규칙에서 나가시겠습니까?</span>
        </S.SpanContainer>
        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.OkButton onClick={onClose}>나가기</S.OkButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default ExitModal;
