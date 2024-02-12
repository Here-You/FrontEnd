import { CountInfo } from '..';

import * as S from './ProfileBox.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { postFollowMate } from '@/apis/request/mate';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const ProfileBox = ({ profile }) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: postFollowMate,
    onSuccess: () => {
      queryClient.invalidateQueries(['profile']);
    },
    onError: () => {
      console.error('팔로우 요청 실패:', error);
      alert('팔로우 요청이 실패했습니다. 나중에 다시 시도해주세요.');
    },
  });

  return (
    <S.ProfileContainer>
      <S.InfoContainer>
        <S.ImageContainer>
          <S.Image
            src={profile?.image ? profile?.image : Logo}
            alt={profile?.nickname}
          />
          <S.TextContainer>
            <h1>{profile?.nickname}</h1>
            {profile?.is_followed !== null && (
              <S.Button
                onClick={async () => {
                  try {
                    await mutateAsync(profile?._id);
                  } catch (e) {
                    console.error(e);
                  }
                }}>
                {profile?.is_followed === true ? '언팔로우' : '팔로우'}
              </S.Button>
            )}
          </S.TextContainer>
        </S.ImageContainer>
        <S.CountContainer>
          <CountInfo title="게시물" count={profile?.signatures} />
          <CountInfo title="팔로워" count={profile?.follower} />
          <CountInfo title="팔로잉" count={profile?.following} />
        </S.CountContainer>
      </S.InfoContainer>
      <S.Intro>{profile?.introduction}</S.Intro>
    </S.ProfileContainer>
  );
};

export default ProfileBox;
