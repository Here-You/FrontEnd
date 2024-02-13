// import GoogleLoginButton from './GoogleLoginButton';
// import KakaoLoginButton from './KakaoLoginButton';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// const LoginButton = () => {
//   const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
//   return (
//     <>
//       <GoogleOAuthProvider clientId={clientId}>
//         <GoogleLoginButton />
//       </GoogleOAuthProvider>
//       <KakaoLoginButton />
//     </>
//   );
// };
// export default LoginButton;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { axios, axiosWithToken } from '@/apis/api';
import useUser from '@/store/useUser';

const TestLoginPage = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { information, resetInformation, setUserInfo, userInfo } = useUser();

  const handleSubmit = e => {
    e.preventDefault();
    const user = information.find(
      user => user.email === email && user.pw === password,
    );
    if (user) {
      const accessToken = uuidv4();
      alert('로그인 성공');

      localStorage.setItem('x-access-token', accessToken);
      setUserInfo(user);
      navigate('/');
    } else {
      console.error('Login failed: Invalid credentials');
    }
    // try {
    //   const response = await axios.post(
    //     'https://hereyou.kaaang.dev/api/v1/user/login',
    //     {
    //       email,
    //       password,
    //     },
    //   );

    //   console.log(response);
    //   localStorage.setItem('x-access-token', response.data.token);
    //   // navigate('/');
    // } catch (error) {
    //   console.error('Login failed:', error.message);
    // }
  };

  return (
    <>
      {information?.map((list, index) => (
        <>
          <div key={index}>{list.email}</div>
          <div key={index + list.pw}>{list.pw}</div>
        </>
      ))}
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
      <button onClick={() => navigate('/signup')}>회원가입</button>
      <button onClick={() => resetInformation()}>초기화</button>
    </>
  );
};

export default TestLoginPage;
