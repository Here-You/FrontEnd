import { myPageImg } from '../../../public/images/mypage/index';
import * as S from './Category.style';

const Category = () => {
  const SubCategory = [
    {
      id: 0,
      img: myPageImg.User,
      title: '프로필 변경',
    },
    {
      id: 1,
      img: myPageImg.Sign_out_squre,
      title: '로그아웃',
    },
    {
      id: 2,
      img: myPageImg.Book,
      title: '내 작성일지 확인하기',
    },
    {
      id: 3,
      img: myPageImg.Diamond,
      title: '내 시그니처 확인하기',
    },
    {
      id: 4,
      img: myPageImg.Lock,
      title: '공개범위 설정',
    },
    {
      id: 5,
      img: myPageImg.Question,
      title: '자주 묻는 질문',
    },
    {
      id: 6,
      img: myPageImg.Bug,
      title: '버그 및 오류 제보',
    },
    {
      id: 7,
      img: myPageImg.Chat,
      title: '의견 보내기',
    },
    {
      id: 8,
      img: myPageImg.Sertificate,
      title: '개발자 소개',
    },
    {
      id: 9,
      img: myPageImg.File,
      title: '서비스 이용약관',
    },
  ];

  return (
    <>
      <S.CategoryBox>
        <S.MyPageCategory>유저설정</S.MyPageCategory>
        {SubCategory.map(
          c =>
            c.id < 5 && (
              <S.Subcategory key={c.id}>
                <S.CategoryImg src={c.img} alt={c.title} />
                <S.SubcategoryContent>{c.title}</S.SubcategoryContent>
              </S.Subcategory>
            ),
        )}
      </S.CategoryBox>
      <S.CategoryBox>
        <S.MyPageCategory>지원</S.MyPageCategory>

        {SubCategory.map(
          c =>
            c.id > 4 &&
            c.id < 8 && (
              <S.Subcategory key={c.id}>
                <S.CategoryImg src={c.img} alt={c.title} />
                <S.SubcategoryContent>{c.title}</S.SubcategoryContent>
              </S.Subcategory>
            ),
        )}
      </S.CategoryBox>
      <S.CategoryBox>
        <S.MyPageCategory>기타</S.MyPageCategory>

        {SubCategory.map(
          c =>
            c.id > 7 && (
              <S.Subcategory key={c.id}>
                <S.CategoryImg src={c.img} alt={c.title} />
                <S.SubcategoryContent>{c.title}</S.SubcategoryContent>
              </S.Subcategory>
            ),
        )}
      </S.CategoryBox>
    </>
  );
};
export default Category;
