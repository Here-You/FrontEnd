import * as S from './MyPage.style';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';

const MyPage = () => {
  return (
    <>
      <S.MyPageContainer>
        <MyPageInfo />
        <Category />
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
