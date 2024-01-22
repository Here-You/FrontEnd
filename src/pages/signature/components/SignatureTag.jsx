import React from 'react';
import styled from 'styled-components';

//시그니처 태그 컴포넌트

export default function SignatureTag({ tagName }) {
  return (
    <TagWrap>
      <TagBox>{`# ${tagName}`}</TagBox>
    </TagWrap>
  );
}

const TagWrap = styled.div`
  display: flex;
  border-radius: 30px;
  background: #1b9c85;
  padding: 5px 11px;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  cursor: pointer;
`;
const TagBox = styled.div`
  display: flex;
  color: var(--main, #fff);
  font-family: Pretendard-bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
