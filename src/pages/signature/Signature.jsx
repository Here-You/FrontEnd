import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import TokenErrorPage from './TokenErrorPage';

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

  return <div></div>;
};

export default Signature;
