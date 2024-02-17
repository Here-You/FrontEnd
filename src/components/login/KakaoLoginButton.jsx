import * as S from './SnsLoginButton.style';
import KakaoIcon from '/images/Kakao.svg';

const KakaoLoginButton = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEAY;
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <S.KLoginButton onClick={handleLogin}>
        <S.Icon src={KakaoIcon} />
        <h3>카카오 로그인 </h3>
      </S.KLoginButton>
    </>
  );
};
export default KakaoLoginButton;
