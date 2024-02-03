import { useForm } from 'react-hook-form';

import * as S from './SignUpMyInfo.style';

const SignUpMyInfo = () => {
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
    <>
      <S.TextAreaContainer>
        <p>닉네임</p>
        <S.NickNameTextArea></S.NickNameTextArea>
        <p>자기 소개</p>
        <S.IntroTextArea />
        <S.StoreButton>저장하기</S.StoreButton>
      </S.TextAreaContainer>
    </>
  );
};
export default SignUpMyInfo;
