import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './PublicScope.style';
import { putPublicScope } from '@/apis/request/profile';
import Schema from '@/components/schema/Schema';
import usePublicScopeModal from '@/hooks/modal/usePublicScopeModal';

const PublicScopeModal = ({ myVisibility }) => {
  const publicScopeModal = usePublicScopeModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      visibility: myVisibility,
    },
  });

  useEffect(() => {
    setValue(myVisibility);
  }, [myVisibility]);

  const { visibility } = watch();

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>공개범위를 설정해 주세요.</S.Title>
        <S.RadioContainer>
          <label>
            <div>
              <p>나만보기</p>
              <input type="radio" value="PRIVATE" {...register('visibility')} />
            </div>
          </label>
          <label>
            <div>
              <p>메이트만</p>
              <input type="radio" value="MATE" {...register('visibility')} />
            </div>
          </label>
          <label>
            <div>
              <p>모두 공개</p>
              <input type="radio" value="PUBLIC" {...register('visibility')} />
            </div>
          </label>
        </S.RadioContainer>
      </S.ContentContainer>
    </S.Container>
  );

  const handleCloseModal = () => {
    publicScopeModal.onClose();
  };

  const onSubmit = async data => {
    if (!visibility) {
      alert('내용을 입력해주세요!');
    } else {
      setIsLoading(true);
      try {
        const res = await putPublicScope(visibility);
        if (res) {
          alert('공개범위가 설정되었습니다.');
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
      isOpen={publicScopeModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="설정"
      secondButtonColor="red"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default PublicScopeModal;
