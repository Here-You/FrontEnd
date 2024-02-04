import { useState } from 'react';

import Modal from '../Modal';
import * as S from './LogoutModal.style';
import { useLoginToken } from '@/hooks/login/useLoginToken';
import useLogoutModal from '@/hooks/modal/useLogoutModal';
import { googleLogout } from '@react-oauth/google';

const LogoutModal = ({}) => {
  const logoutModal = useLogoutModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { data, loading, error } = useLoginToken();

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

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      console.log(data);
      googleLogout();
      handleCloseModal();
    } catch (error) {
      console.error('Logout error:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
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
