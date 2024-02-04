import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './WithDrawalModal.style';
import { deleteWithdrawMember } from '@/apis/request/profile';
import useWithdrawalModal from '@/hooks/modal/useWithdrawalModal';

const WithDrawalModal = () => {
  const withdrawalModal = useWithdrawalModal();
  const [isLoading, setIsLoading] = useState(false);

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>여행의 이유 회원탈퇴</S.Title>
        <S.Content>정말 탈퇴하시겠어요?ㅠㅠ</S.Content>
      </S.ContentContainer>
    </S.Container>
  );

  const handleCloseModal = () => {
    withdrawalModal.onClose();
  };

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const res = await deleteWithdrawMember();
      if (res) {
        alert('회원탈퇴 되었습니다');
      }
    } catch (error) {
      console.log(error);
      console.error('서버 내부 오류.', error);
      alert('서버 내부 오류');
    } finally {
      setIsLoading(false);
      handleCloseModal();
    }
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={withdrawalModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
      actionLabel="회원탈퇴"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default WithDrawalModal;
