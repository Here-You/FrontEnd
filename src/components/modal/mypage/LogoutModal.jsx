import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './LogoutModal.style';
import { deleteWithdrawMember } from '@/apis/request/profile';
import useLogoutModal from '@/hooks/modal/useLogoutModal';

const LogoutModal = ({}) => {
  const logoutModal = useLogoutModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>여행의 이유 로그아웃</S.Title>
        <S.Content>로그아웃 하시겠습니까?</S.Content>
      </S.ContentContainer>
    </S.Container>
  );

  const handleCloseModal = () => {
    logoutModal.onClose();
  };

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const res = await deleteWithdrawMember();
      if (res) {
        alert('로그아웃 되었습니다.');
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
      isOpen={logoutModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
      actionLabel="로그아웃"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default LogoutModal;
