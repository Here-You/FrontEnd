import * as S from './FollowRedirectPage.style';
import AirplaneImg from '/images/onboarding1.svg';

const FollowRedirectPage = () => {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <img src={AirplaneImg} />
        <S.Text>로그인하고 내 메이트와</S.Text>
        <S.Text>새로운 여행 기록을 확인해보세요!</S.Text>
      </S.ContentContainer>
    </S.PageContainer>
  );
};

export default FollowRedirectPage;
