import Modal from '../../modal/Modal';
import useWithdrawalModal from '@/store/useWithdrawalModal';

const WithdrawalModal = () => {
  const { isOpen, onClose } = useWithdrawalModal();
  return (
    <>
      {isOpen && (
        <Modal
          title="여행의 이유 회원탈퇴"
          buttonText="회원탈퇴"
          secondTitle="정말 탈퇴하시겠어요?ㅠㅠ"
          onClose={() => onClose()}
        />
      )}
    </>
  );
};
export default WithdrawalModal;
