import * as S from './FollowModal.style';

const FollowModal = ({ onClose, name, isFollowing }) => {
  return (
    <S.ModalBase>
      <S.ModalContainer>
        <button onClick={onClose}></button>
        {isFollowing ? (
          <span>{name}님을 언팔로우하였습니다.</span>
        ) : (
          <span>{name}님을 팔로우하였습니다.</span>
        )}
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default FollowModal;
