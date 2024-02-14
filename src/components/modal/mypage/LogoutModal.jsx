import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Modal from '../Modal';
import * as S from './BasicModal.style';
import useLogoutModal from '@/hooks/modal/useLogoutModal';
import useAuth from '@/store/useAuth';

const LogoutModal = ({}) => {
  const logoutModal = useLogoutModal();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>여행의 이유 로그아웃</S.Title>
        <S.Content>정말로, 로그아웃 하시겠습니까?</S.Content>
      </S.ContentContainer>
    </S.Container>
  );

  const handleCloseModal = () => {
    logoutModal.onClose();
  };

  const onSubmit = () => {
    logout();
    handleCloseModal();
    navigate('/login');
    toast.success('로그아웃 성공');
  };

  return (
    <Modal
      isOpen={logoutModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
      actionLabel="로그아웃"
      secondButtonColor="red"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default LogoutModal;
