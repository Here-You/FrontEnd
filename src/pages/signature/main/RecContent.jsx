import React from 'react';
import styled from 'styled-components';

import SignaturePreview from '../components/SignaturePreview';
import SignatureTag from '../components/SignatureTag';

export default function RecContent() {
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
      <TagWrap>
        <SignatureTag tagName={'인형 🧸'} />
      </TagWrap>

      <PreviewWrap>
        <SignaturePreview {...MockData} />
        <SignaturePreview {...MockData} />
      </PreviewWrap>
      <Divider />
      <TagWrap>
        <SignatureTag tagName={'캠핑 🏕️'} />
      </TagWrap>

      <PreviewWrap>
        <SignaturePreview {...MockData} />
        <SignaturePreview {...MockData} />
      </PreviewWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 0 auto;
`;

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Divider = styled.div`
  background: var(--gray2, #c8c8c8);
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
`;
