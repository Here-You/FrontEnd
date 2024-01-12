import { useEffect, useState } from 'react';

import { myPageImg } from '../../../public/images/mypage/index';
import * as S from './MyPage.style';
import { getProfileInfo } from '@/apis/request/profile';

const MyPage = () => {
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
    <S.MypageWrap>
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
      <S.CategoryBox>
        <S.MyPageCategory>유저설정</S.MyPageCategory>

        <S.Subcategory>
          <S.CategoryImg src={myPageImg.User} alt="프로필 변경" />
          <S.SubcategoryContent>프로필 변경</S.SubcategoryContent>
        </S.Subcategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Sign_out_squre} alt="프로필 변경" />
          <S.SubcategoryContent>로그아웃</S.SubcategoryContent>
        </S.Subcategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Book} alt="프로필 변경" />
          <S.SubcategoryContent>내 작성일지 확인하기</S.SubcategoryContent>
        </S.Subcategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Diamond} alt="프로필 변경" />
          <S.SubcategoryContent>내 시그니처 확인하기</S.SubcategoryContent>
        </S.Subcategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Lock} alt="프로필 변경" />
          <S.SubcategoryContent>공개 범위 설정</S.SubcategoryContent>
        </S.Subcategory>
      </S.CategoryBox>
      <S.CategoryBox>
        <S.MyPageCategory>지원</S.MyPageCategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Question} alt="프로필 변경" />
          <S.SubcategoryContent>자주 묻는 질문</S.SubcategoryContent>
        </S.Subcategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Bug} alt="프로필 변경" />
          <S.SubcategoryContent>버그 및 오류 제보</S.SubcategoryContent>
        </S.Subcategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Chat} alt="프로필 변경" />
          <S.SubcategoryContent>의견 보내기</S.SubcategoryContent>
        </S.Subcategory>
      </S.CategoryBox>
      <S.CategoryBox>
        <S.MyPageCategory>기타</S.MyPageCategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.Sertificate} alt="프로필 변경" />
          <S.SubcategoryContent>개발자 소개</S.SubcategoryContent>
        </S.Subcategory>
        <S.Subcategory>
          <S.CategoryImg src={myPageImg.File} alt="프로필 변경" />
          <S.SubcategoryContent>서비스 이용 약관</S.SubcategoryContent>
        </S.Subcategory>
      </S.CategoryBox>
    </S.MypageWrap>
  );
};

export default MyPage;
