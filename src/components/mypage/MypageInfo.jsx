import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MypageInfo.style';
import { myPageImg } from '/public/images/mypage/index';
import { getProfileInfo } from '@/apis/request/profile';
import theme from '@/theme';

const MyPageInfo = () => {
  const [info, setInfo] = useState([]);
  const [isLogin, setIsLogin] = useState();
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();

  const navigate = useNavigate();

  const handleGoMate = () => {
    navigate('/mate/management');
  };

  const getProfile = async () => {
    const ACCESS_TOKEN = localStorage.getItem('x-access-token');
    console.log(ACCESS_TOKEN);
    try {
      const response = await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error('프로필을 가져오는 중 오류 발생:', error);
    }
  };
  useEffect(() => {
    setIsLogin(localStorage.getItem('x-access-token'));
    getProfile();
  }, []);
  return (
    <S.ProfileContainer>
      <S.ProfilePicture src={myPageImg.ProfilePicture} alt="아" />
      <S.ProfileInfoContainer>
        {isLogin ? (
          <>
            <S.NickNameTypeContainer>
              <h3> {user_id}</h3>
              <h3> {nickName}</h3>
            </S.NickNameTypeContainer>
            <p> 이메일</p>
            <p style={{ color: `${theme.COLOR.MAIN.BLACK}` }}>소개</p>
            <S.Mate onClick={handleGoMate}>
              팔로워
              <S.NumberOfPeople>32</S.NumberOfPeople> 팔로잉
              <S.NumberOfPeople>32</S.NumberOfPeople>
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
