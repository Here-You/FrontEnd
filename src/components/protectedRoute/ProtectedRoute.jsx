import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '@/store/useAuth';

const ProtectedRouter = ({ children }) => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  useEffect(() => {
    if (!isLogin) {
      alert('로그인 후 이용 가능합니다');
      navigate('/login', { replace: true });
    }
  }, [navigate, isLogin]);
  return children;
};

export default ProtectedRouter;
