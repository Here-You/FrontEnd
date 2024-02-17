import { useNavigate } from 'react-router-dom';

import * as S from './QuitUserPage.style';
import RedirectIcon from '/images/RedirectIcon.png';

const QuitUserPage = ({ type }) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Image src={RedirectIcon} />
      {type === 'quit' ? (
        <h3>이미 탈퇴한 회원입니다!</h3>
      ) : (
        <h3>존재하지 않는 회원입니다!</h3>
      )}
      <S.Button onClick={() => navigate('/')}>홈 화면으로 돌아가기</S.Button>
    </S.Container>
  );
};

export default QuitUserPage;
