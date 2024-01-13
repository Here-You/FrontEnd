import React from 'react';
import styled from 'styled-components';

import SignaturePreview from '../components/SignaturePreview';

export default function LikeContent() {
  const MockData = {
    userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
    date: '23 / 10 / 11',
    previewUrl:
      'https://i.ibb.co/D1bwz3j/Kakao-Talk-20231203-204945606.png" alt="Kakao-Talk-20231203-204945606',
    title: '우리 동글이와 함꼐한, 강릉 1박 2일',
    heart: 3012,
  };
  return (
    <Wrap>
      <SignaturePreview {...MockData} />
      <SignaturePreview {...MockData} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
