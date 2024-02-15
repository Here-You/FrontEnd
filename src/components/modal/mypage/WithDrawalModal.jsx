import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Modal from '../Modal';
import * as S from './BasicModal.style';
import { deleteWithdrawMember } from '@/apis/request/profile';
import useWithdrawalModal from '@/hooks/modal/useWithdrawalModal';
import useAuth from '@/store/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const WithDrawalModal = () => {
  const queryClient = useQueryClient();
  const withdrawalModal = useWithdrawalModal();
  const navigate = useNavigate();
  const { revoke } = useAuth();

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

  const { mutateAsync: revokeMember } = useMutation({
    mutationFn: deleteWithdrawMember,
    onSuccess: () => {
      queryClient.removeQueries(['myProfile']);
      revoke();
      navigate('/');
    },
    onError: () => {
      toast.error('회원 탈퇴를 실패하였습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('회원 탈퇴가 정상적으로 되었습니다.');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  const onSubmit = async () => {
    try {
      await revokeMember();
      withdrawalModal.onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
      isOpen={withdrawalModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
      actionLabel="회원탈퇴"
      secondButtonColor="red"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default WithDrawalModal;
