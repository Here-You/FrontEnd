import Modal from '../../modal/Modal';
import useNickNameModal from '@/store/useNickNameModal';

const NickNameModal = () => {
  const { isOpen,onClose } = useNickNameModal();
  return (
    <>
      {isOpen && (
        <Modal
          title="변경할 닉네임을 입력해 주세요."
          buttonText="닉네임 변경"
          inputType="nickname"
          onClose={() => onClose()}
          squareDoubleButton
        />
      )}
    </>
  );
};
export default NickNameModal;
