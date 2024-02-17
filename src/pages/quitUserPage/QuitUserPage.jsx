import { useNavigate } from 'react-router-dom';

import * as S from './QuitUserPage.style';
import RedirectIcon from '/images/RedirectIcon.png';

const QuitUserPage = ({ type, bgColor }) => {
  const navigate = useNavigate();
  let message;
  switch (type) {
    case 'quit':
      message = '이미 탈퇴한 회원입니다!';
      break;
    case 'non-user':
      message = '존재하지 않는 회원입니다!';
      break;
    case 'not-login':
      message = '로그인 후 서비스를 이용해주세요!';
      break;
    default:
      message = '';
  }
  return (
    <S.Container $bgColor={bgColor}>
      <S.Image src={RedirectIcon} />
      <h3>{message}</h3>
      <S.Button onClick={() => navigate('/')}>홈 화면으로 돌아가기</S.Button>
    </S.Container>
  );
};

export default QuitUserPage;
