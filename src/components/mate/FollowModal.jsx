import * as S from './FollowModal.style';

const FollowModal = ({ onClose, name }) => {
  return (
    <S.ModalBase>
      <S.ModalContainer>
        <S.ModalCloseButton onClick={onClose}></S.ModalCloseButton>
        <S.ModalContents>{name}님을 팔로우하였습니다.</S.ModalContents>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default FollowModal;
