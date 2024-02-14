import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MypageInfo.style';
import { myPageImg } from '/public/images/mypage/index';
import { useProfileInfo } from '@/hooks/profile/useProfile';
import useUser from '@/store/useUser';
import theme from '@/theme';

const MyPageInfo = () => {
  const [isLogin, setIsLogin] = useState();

  const { userInfo } = useUser();
  const { data, error } = useProfileInfo();

  const navigate = useNavigate();

  const handleGoMate = () => {
    navigate('/mate/management');
  };

  useEffect(() => {
    setIsLogin(localStorage.getItem('x-access-token'));
  }, []);
  return (
    <S.ProfileContainer>
      <S.ProfilePicture src={myPageImg.ProfilePicture} alt="아" />
      <S.ProfileInfoContainer>
        {isLogin ? (
          <>
            <S.NickNameTypeContainer>
              <h3> {data.nickname}</h3>
            </S.NickNameTypeContainer>
            <p> {data.email}</p>
            <p style={{ color: `${theme.COLOR.MAIN.BLACK}` }}>
              {data.introduction}
            </p>
            <S.Mate onClick={handleGoMate}>
              팔로워
              <S.NumberOfPeople>{data.followers}</S.NumberOfPeople> 팔로잉
              <S.NumberOfPeople>{data.followings}</S.NumberOfPeople>
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
