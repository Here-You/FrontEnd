import InputModalPage from './InputModal';
import useIntroModal from '@/store/useIntroModal';

const IntroModal = () => {
  const { isOpen, onClose } = useIntroModal();
  return (
    <>
      {isOpen && (
        <InputModalPage
          title="변경할 프로필 소개 내용을 입력해 주세요."
          buttonText="프로필 소개 변경"
          onClose={() => onClose()}
        />
      )}
    </>
  );
};
export default IntroModal;
