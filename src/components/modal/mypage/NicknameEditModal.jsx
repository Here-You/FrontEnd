import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './NicknameEdit.style';
import { updateNickName } from '@/apis/request/profile';
import useNicknameEditModal from '@/hooks/modal/useNickameEditModal';

const NicknameEditModal = ({ myNickname }) => {
  const nicknameEditModal = useNicknameEditModal();
  const [isLoading, setIsLoading] = useState(false);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      nickname: myNickname,
    },
  });

  useEffect(() => {
    setValue('nickname', myNickname);
  }, [myNickname]);

  const { nickname } = watch();

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>변경할 닉네임을 입력해 주세요.</S.Title>
        <S.Input
          id="nickname"
          {...register('nickname')}
          value={nickname}
          placeholder="변경할 닉네임을 입력하세요"
        />
      </S.ContentContainer>
    </S.Container>
  );

  const handleCloseModal = () => {
    reset({});
    nicknameEditModal.onClose();
  };

  const onSubmit = async data => {
    if (!nickname) {
      alert('내용을 입력해주세요!');
    } else {
      setIsLoading(true);
      try {
        const res = await updateNickName({ ...data, nickname });
        if (res) {
          alert('닉네임이 변경 되었습니다.');
          console.log('제출된 데이터: ', data);
        }
      } catch (error) {
        console.log(error);
        console.error('서버 내부 오류.', error);
        alert('서버 내부 오류');
      } finally {
        setIsLoading(false);
        handleCloseModal();
      }
    }
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={nicknameEditModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="변경"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default NicknameEditModal;
