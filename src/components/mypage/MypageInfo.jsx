import { useEffect, useState } from 'react';
import { myPageImg } from '../../../public/images/mypage/index';
import { getProfileInfo } from '@/apis/request/profile';
import * as S from './MypageInfo.style';

 const MyPageInfo = () => {
    const [info, setInfo] = useState([]);
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
        <S.NickNameTypeBox>
          <S.NickName> {info.nickname}</S.NickName>
          <S.NickName> {info.type}</S.NickName>
        </S.NickNameTypeBox>
        <S.Email> {info.email}</S.Email>
        <S.Introduction> {info.introduction}</S.Introduction>
        <S.Mate> {info.mate}</S.Mate>
      </S.ProfileInfoBox>
    </S.ProfileBox>
  );
};
export default MyPageInfo;