import { useEffect, useState } from 'react';

import { myPageImg } from '../../../public/images/mypage/index';
import * as S from './MypageInfo.style';
import { getProfileInfo } from '@/apis/request/profile';

const MyPageInfo = () => {
  const [info, setInfo] = useState([]);
  const [islogin, setIsLogin] = useState(true);
  const getInfo = async () => {
    try {
      const res = await getProfileInfo();
      const members = res.data;
      setInfo(members);
      console.log(info);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <S.ProfileBox>
      <S.ProfilePicture src={myPageImg.ProfilePicture} alt="아" />
      <S.ProfileInfoBox>
        {info.nickname ? (
          <>
            {' '}
            <S.NickNameTypeBox>
              <S.NickName> {info.nickname}</S.NickName>
              <S.NickName> {info.type}</S.NickName>
            </S.NickNameTypeBox>
            <S.Email> {info.email}</S.Email>
            <S.Introduction> {info.introduction}</S.Introduction>
            <S.Mate>
              {info.follower}
              <S.NumberOfPeople>32</S.NumberOfPeople> {info.following}
              <S.NumberOfPeople>32</S.NumberOfPeople>
            </S.Mate>
          </>
        ) : (
          <>
            <S.NickName>로그인하세요.</S.NickName>
            <S.Email>로그인 하러가기</S.Email>
          </>
        )}
      </S.ProfileInfoBox>
    </S.ProfileBox>
  );
};
export default MyPageInfo;
