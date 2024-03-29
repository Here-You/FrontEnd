import { useNavigate } from 'react-router-dom';

import LogoutModal from '../modal/mypage/LogoutModal';
import * as S from './MypageInfo.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { myPageImg } from '/public/images/mypage/index';
import useLogoutModal from '@/hooks/modal/useLogoutModal';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import useAuth from '@/store/useAuth';
import theme from '@/theme';

const MyPageInfo = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  let myProfile = null;

  if (isLogin) {
    const { data, isPending, isError } = useGetMyProfile();
    myProfile = data?.data?.data?.user;
  }

  const logoutModal = useLogoutModal();

  return (
    <S.ProfileContainer>
      <LogoutModal />
      <S.ContentContainer>
        {isLogin ? (
          <S.ProfilePicture
            src={myProfile?.profileImage ? myProfile?.profileImage : Logo}
            alt={myProfile?.nickname}
          />
        ) : (
          <S.ProfilePicture src={myPageImg?.ProfilePicture} />
        )}
        <S.ProfileInfoContainer>
          {isLogin ? (
            <>
              <S.NickNameTypeContainer>
                <h3>{myProfile?.nickname}</h3>
              </S.NickNameTypeContainer>
              <p>{myProfile?.email}</p>
              <p style={{ color: `${theme.COLOR.MAIN.BLACK}` }}>
                {myProfile?.introduction}
              </p>
              <S.Mate onClick={() => navigate('/mate/management')}>
                <S.FollowContainer>
                  <S.NumberOfPeople>
                    <p>팔로워</p>
                    {myProfile?.followers}
                  </S.NumberOfPeople>
                  <S.NumberOfPeople>
                    <p>팔로잉</p> {myProfile?.followings}
                  </S.NumberOfPeople>
                  <S.Button
                    onClick={e => {
                      e.stopPropagation();
                      logoutModal.onOpen();
                    }}>
                    로그아웃
                  </S.Button>
                </S.FollowContainer>
              </S.Mate>
            </>
          ) : (
            <>
              <h3>로그인하세요.</h3>
              <S.LinkTo to="/login">로그인 하러가기</S.LinkTo>
            </>
          )}
        </S.ProfileInfoContainer>
      </S.ContentContainer>
    </S.ProfileContainer>
  );
};
export default MyPageInfo;
