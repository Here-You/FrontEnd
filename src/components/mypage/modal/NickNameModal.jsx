import InputModalPage from './InputModal';
import useNickNameModal from '@/store/useNickNameModal';

const NickNameModal = () => {
  const { isOpen,onClose } = useNickNameModal();
  return (
    <>
      {isOpen && (
        <InputModalPage
          title="변경할 닉네임을 입력해 주세요."
          buttonText="닉네임 변경"
          onClose={() => onClose()}
        />
      )}
    </>
  );
};
export default NickNameModal;
