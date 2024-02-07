import { useNavigate } from 'react-router-dom';

import * as S from './ErrorPage.style';
import logo from '/images/mainlogo.svg';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <img src={logo} />
      <S.ErrorContainer>
        <h1>에러가 발생했습니다.</h1>
      </S.ErrorContainer>
      <S.RoutingBox onClick={() => navigate('/')}>
        <S.RoutingText>홈으로 이동하기!</S.RoutingText>
      </S.RoutingBox>
    </S.Container>
  );
};

export default ErrorPage;
