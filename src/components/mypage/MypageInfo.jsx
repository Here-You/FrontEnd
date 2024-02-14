import { useNavigate } from 'react-router-dom';

import * as S from './MypageInfo.style';
import { myPageImg } from '/public/images/mypage/index';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import useAuth from '@/store/useAuth';
import theme from '@/theme';

const MyPageInfo = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  const { data, isPending, isError } = useGetMyProfile();
  const myProfile = data?.data?.data?.user;

  const handleGoMate = () => {
    navigate('/mate/management');
  };

  return (
    <S.ProfileContainer>
      {isLogin ? (
        <S.ProfilePicture src={myProfile?.profileImage} alt="아" />
      ) : (
        <S.ProfilePicture src={myPageImg?.ProfilePicture} />
      )}
      <S.ProfileInfoContainer>
        {isLogin ? (
          <>
            <S.NickNameTypeContainer>
              <h3> {myProfile?.nickname}</h3>
            </S.NickNameTypeContainer>
            <p>{myProfile?.email}</p>
            <p style={{ color: `${theme.COLOR.MAIN.BLACK}` }}>
              {myProfile?.introduction}
            </p>
            <S.Mate onClick={handleGoMate}>
              팔로워
              <S.NumberOfPeople>{myProfile?.followers}</S.NumberOfPeople> 팔로잉
              <S.NumberOfPeople>{myProfile?.followings}</S.NumberOfPeople>
            </S.Mate>
          </>
        ) : (
          <>
            <h3>로그인하세요.</h3>
            <S.LinkTo to="/login">로그인 하러가기</S.LinkTo>
          </>
        )}
      </S.ProfileInfoContainer>
    </S.ProfileContainer>
  );
};
export default MyPageInfo;
