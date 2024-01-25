import * as S from './RuleFollowModal.style';

const RuleFollowModal = ({ onClose }) => {
  return (
    <S.ModalBase>
      <S.ModalContainer>
        <span>초대할 메이트의 아이디를 입력하세요.</span>
        <S.SearchContainer>
          <S.UserInput />
          <S.SearchButton />
        </S.SearchContainer>

        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.OkButton>초대하기</S.OkButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default RuleFollowModal;
