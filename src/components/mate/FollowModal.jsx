import * as S from './FollowModal.style';

const FollowModal = ({ onClose, name }) => {
  return (
    <S.ModalBase>
      <S.ModalContainer>
        <button onClick={onClose}></button>
        <span>{name}님을 팔로우하였습니다.</span>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default FollowModal;
