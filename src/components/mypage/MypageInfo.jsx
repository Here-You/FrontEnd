import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MypageInfo.style';
import { myPageImg } from '/public/images/mypage/index';
import { getProfileInfo } from '@/apis/request/profile';
import theme from '@/theme';

const MyPageInfo = () => {
  const [info, setInfo] = useState([]);
  const [isLogin, setIsLogin] = useState();
  const navigate = useNavigate();

  const handleGoMate = () => {
    navigate('/mate/management');
  };
  const getInfo = async () => {
    try {
      const res = await getProfileInfo();
      const members = res.data;
      setInfo(members);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setIsLogin(localStorage.getItem('x-access-token'));

    getInfo();
  }, []);
  return (
    <S.ProfileContainer>
      <S.ProfilePicture src={myPageImg.ProfilePicture} alt="아" />
      <S.ProfileInfoContainer>
        {isLogin ? (
          <>
            <S.NickNameTypeContainer>
              <h3> {info.nickname}</h3>
              <h3> {info.type}</h3>
            </S.NickNameTypeContainer>
            <p> {info.email}</p>
            <p style={{ color: `${theme.COLOR.MAIN.BLACK}` }}>
              {info.introduction}
            </p>
            <S.Mate onClick={handleGoMate}>
              {info.follower}
              <S.NumberOfPeople>32</S.NumberOfPeople> {info.following}
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
