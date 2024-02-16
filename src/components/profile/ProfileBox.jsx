import { CountInfo } from '..';
import toast from 'react-hot-toast';

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
      toast.error('팔로우 요청을 실패했습니다. 나중에 다시 시도해주세요.');
    },
    onSettled: isSuccess => {
      console.log(isSuccess);
      if (isSuccess.data.success === true) {
        toast.success(isSuccess.data.message);
      } else {
        toast.error(isSuccess.data.message);
      }
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
          <S.IntroContainer>
            <S.TextContainer>
              <h1>{profile?.nickname}</h1>
              {profile?.is_followed !== null && (
                <S.Button
                  follow={profile?.is_followed}
                  onClick={async () => {
                    try {
                      await mutateAsync(profile?._id);
                    } catch (e) {
                      console.error(e);
                    }
                  }}>
                  {profile?.is_followed === true ? '팔로잉' : '팔로우'}
                </S.Button>
              )}
            </S.TextContainer>
            <S.Intro>{profile?.introduction}</S.Intro>
          </S.IntroContainer>
        </S.ImageContainer>

        <S.CountContainer>
          <CountInfo title="게시물" count={profile?.signatures} />
          <CountInfo title="팔로워" count={profile?.follower} />
          <CountInfo title="팔로잉" count={profile?.following} />
        </S.CountContainer>
      </S.InfoContainer>
    </S.ProfileContainer>
  );
};

export default ProfileBox;
