import * as S from './MyProfileEditContainer.style';
import { myPageEditImg } from '/public/images/mypage/index';
import useIntroEditModal from '@/hooks/modal/useIntroEditModal';
import useNicknameEditModal from '@/hooks/modal/useNickameEditModal';
import useWithdrawalModal from '@/hooks/modal/useWithdrawalModal';

const MyProfileEditContainer = () => {
  const nicknameEditModal = useNicknameEditModal();
  const introEditModal = useIntroEditModal();
  const withdrawalModal = useWithdrawalModal();

  return (
    <S.Container>
      <S.ContentContainer>
        <S.Content onClick={() => nicknameEditModal.onOpen()}>
          <h3>닉네임 수정</h3>
          <img src={myPageEditImg.RightArrow} />
        </S.Content>
        <S.Content onClick={() => introEditModal.onOpen()}>
          <h3>프로필 소개 수정</h3>
          <img src={myPageEditImg.RightArrow} />
        </S.Content>
        <S.Content onClick={() => withdrawalModal.onOpen()}>
          <h3>여행의 이유 회원 탈퇴</h3>
          <S.Image src={myPageEditImg.RightArrow} />
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};

export default MyProfileEditContainer;
