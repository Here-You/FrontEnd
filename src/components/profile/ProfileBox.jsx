import { CountInfo } from '..';

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
          </S.TextContainer>
        </S.ImageContainer>
        <S.CountContainer>
          <CountInfo title="게시물" count="37" />
          <CountInfo title="팔로워" count={profile?.follower} />
          <CountInfo title="팔로잉" count={profile?.following} />
        </S.CountContainer>
      </S.InfoContainer>
      <S.Intro>{profile?.introduction}123123123123</S.Intro>
    </S.ProfileContainer>
  );
};

export default ProfileBox;
