import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TokenErrorPage from '@/pages/signature/TokenErrorPage';
import useAuth from '@/store/useAuth';

// 토큰 오류 페이지 컴포넌트를 import하세요.

const ProtectedRouter = ({ children }) => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  console.log(isLogin);
  return isLogin === true ? children : <TokenErrorPage />;
};

export default ProtectedRouter;
