import * as S from './FollowRedirectPage.style';
import AirplaneImg from '/images/onboarding1.svg';

const FollowRedirectPage = () => {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <img src={AirplaneImg} />
        <S.Text>새 친구를 팔로우하고</S.Text>
        <S.Text>최신 시그니처를 확인해보세요!</S.Text>
      </S.ContentContainer>
    </S.PageContainer>
  );
};

export default FollowRedirectPage;
