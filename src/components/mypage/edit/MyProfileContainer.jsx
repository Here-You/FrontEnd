import * as S from './MyProfileContainer.style';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';

const MyProfileContainer = () => {
  const { data, isPending, isError } = useGetMyProfile();
  const myProfile = data?.data?.data?.user;

  return (
    <S.EditContainer>
      <S.ContentContainer>
        <S.Content>
          <h3>닉네임</h3>
          <p>{myProfile?.nickname}</p>
        </S.Content>
        <S.Content>
          <h3>이메일</h3>
          <p>{myProfile?.email}</p>
        </S.Content>
        <S.Content>
          <h3>프로필 소개</h3>
          <p>{myProfile?.introduction}</p>
        </S.Content>
      </S.ContentContainer>
    </S.EditContainer>
  );
};

export default MyProfileContainer;
