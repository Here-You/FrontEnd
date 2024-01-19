import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import TokenErrorPage from './TokenErrorPage';

// TokenErrorPage 컴포넌트의 경로에 따라 수정하세요

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedText = styled.div`
  animation: ${fadeInLeft} 1s ease-out;
`;

const Signature = () => {
  const [token, setToken] = useState('');

  if (!token) {
    return <TokenErrorPage />;
  }

  return (
    <div>
      <AnimatedText>글이 한 줄씩 왼쪽에서 튀어나오게</AnimatedText>
      <AnimatedText>글이 한 줄씩 왼쪽에서 튀어나오게</AnimatedText>
    </div>
  );
};

export default Signature;
