import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Login.style';
import Logo from '/images/main.svg';
import { axios, axiosWithToken } from '@/apis/api';
import LoginButton from '@/components/login/LoginButton';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://hereyou.kaaang.dev/api/v1/user/login',
        {
          email,
          password,
        },
      );

      console.log(response);
      localStorage.setItem('x-access-token', response.data.token);
      // navigate('/');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <S.LoginContainer>
      <S.LogoImg src={Logo} />
      <S.ButtonWrap>
        <LoginButton />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </S.ButtonWrap>
    </S.LoginContainer>
  );
};

export default LoginPage;
