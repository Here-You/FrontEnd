import axios from 'axios';
import React, { useEffect } from 'react';

import { postSnsLogin } from '@/apis/request/profile';

const Redirect = () => {
  const code = new URL(window.location.href).searchParams.get('code');
 
  useEffect(() => {
    if (code) {
      postSnsLogin('KAKAO', code);
 
    }
  }, [code]);

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div>
      <button onClick={handleLogin}>로그인 확인 완료</button>
      <p>리다이렉트 페이지</p>
    </div>
  );
};

export default Redirect;
