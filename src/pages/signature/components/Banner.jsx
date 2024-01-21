import React from 'react';
import styled from 'styled-components';

import space from '/images/spacelogo.svg';
import theme from '@/theme';

export default function Banner() {
  const contentData = [
    '사용자님만이 가지고 있는 특별한 여행법이 있나요?',
    '‘여행의 이유’에서는 당신의 특별함을 [시그니처]라고 말한답니다.',
    'ex ) 저는 인형과 함께 여행을 해요.',
  ];

  return (
    <BannerContainer>
      <ButtonContainer>
        <img src={space} />
        <Button>시그니처란?</Button>
      </ButtonContainer>
      <ContentContainer>
        <Content>{contentData[0]}</Content>
        <Content>{contentData[1]}</Content>
        <Content>{contentData[2]}</Content>
      </ContentContainer>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  width: 100%;
  height: 15vh;
  background: rgba(27, 156, 133, 0.16);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: ${theme.COLOR.MAIN.GREEN};
  justify-content: space-around;
  padding: 5px 11px;
  width: 150px;
  color: white;
`;

const Button = styled.div`
  display: flex;
  font-size: 16px;
  font-family: 'Pretendard-semibold';
`;
const ContentContainer = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  margin-top: 3px;
  font-size: 12px;
`;
