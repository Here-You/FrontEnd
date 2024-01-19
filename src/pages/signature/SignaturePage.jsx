import React from 'react';
import styled from 'styled-components';

import theme from '@/theme';

export default function SignaturePage() {
  return (
    <PageContainer>
      <ButtonContainer>
        <Button>내 시그니처</Button>
        <Button>작성하기</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  background-color: pink;
`;
const ButtonContainer = styled.div``;
const Button = styled.button``;
