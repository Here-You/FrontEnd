import { CountInfo } from '..';

import FollowButton from '../mate/FollowButton';
import * as S from './ProfileBox.style';
import Logo from '/images/mypage/MyPageLogo.svg';

const ProfileBox = ({ profile }) => {
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
              <FollowButton
                initialFollowState={profile?.is_followed}
                id={profile?._id}
              />
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
