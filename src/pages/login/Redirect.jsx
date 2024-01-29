import axios from 'axios';
import React, { useEffect } from 'react';

import { API_URL } from '@/constants/path';
import { usePostSnsLogin } from '@/hooks/login/useSnsLogin';
import { useMutation } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';

const Redirect = () => {
  const { mutate } = useMutation({
    mutationFn: usePostSnsLogin,
  });
  useEffect(() => {
    console.log(API_URL.SNS_LOGIN);
    axios.post(`${API_URL.SNS_LOGIN}`).then(r => {
      
    });
  }, []);
  const handleLogin = (formData) =>{
    mutate({event: formData});
  }

  return (
    <div>
      <button onClick={handleLogin}>로그인 확인 완료</button>
      <p>리다이렉트 페이지</p>
    </div>
  );
};

export default Redirect;
