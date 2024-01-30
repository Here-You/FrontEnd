import Modal from '../../modal/Modal';
import useTravelModal from '@/store/useTravelModal copy';
import Home from '/images/Home.svg';
import Bell from '/images/Bell.svg'
const TravelModal = () => {
  const { isOpen, onClose } = useTravelModal();
  return (
    <>
      {isOpen && (
        <Modal
          title="여행제목"
          buttonText="여행 저장하기"
          onClose={() => onClose()}
          roundDoubleButton
          secondButtonText="여행 삭제하기"
          bigModal
          inputType="travel_title"
          secondTitle="선택 날짜"
          firstButtonImg={Home}
          secondButtonImg={Bell}
          thirdTitle="기간"
        />
      )}
    </>
  );
};
export default TravelModal;
