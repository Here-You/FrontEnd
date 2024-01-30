import Modal from '../../modal/Modal';
import useIntroModal from '@/store/useIntroModal';

const IntroModal = () => {
  const { isOpen, onClose } = useIntroModal();
  return (
    <>
      {isOpen && (
        <Modal
          title="변경할 프로필 소개 내용을 입력해 주세요."
          buttonText="프로필 소개 변경"
          inputType="intro"
          onClose={() => onClose()}
          squareDoubleButton
        />
      )}
    </>
  );
};
export default IntroModal;
