import Modal from './Modal';
import useLogOutModal from '@/store/useLogOutModal';

const LogOutModal = () => {
  const { isOpen, onClose } = useLogOutModal();
  return (
    <>
      {isOpen && (
        <Modal
          title="여행의 이유 로그아웃"
          buttonText="로그아웃"
          secondTitle="로그아웃 하시겠습니까"
          onClose={() => onClose()}
        />
      )}
    </>
  );
};
export default LogOutModal;
