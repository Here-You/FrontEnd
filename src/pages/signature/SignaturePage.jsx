import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Preview from './components/Preview';
import MySignaturePage from './main/MySignaturePage';
import Editor from './write/Editor';
import { getSignaturePreview } from '@/apis/request/preview';
import theme from '@/theme';

export default function SignaturePage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await getSignaturePreview();
      const mockData = res.data;
      setData(mockData);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [selectedHeader, setSelectedHeader] = useState('내 시그니처');

  const handleHeaderClick = header => {
    setSelectedHeader(header);
  };

  return (
    <>
      <BannerContainer>배너 들어갈 자리</BannerContainer>
      <PageContainer>
        <ButtonContainer>
          <Button
            selected={selectedHeader === '내 시그니처'}
            onClick={() => handleHeaderClick('내 시그니처')}>
            내 시그니처
          </Button>
          <Button
            selected={selectedHeader === '작성하기'}
            onClick={() => handleHeaderClick('작성하기')}>
            작성하기
          </Button>
        </ButtonContainer>
        {selectedHeader === '내 시그니처' && <MySignaturePage />}
        {selectedHeader === '작성하기' && <Editor />}
      </PageContainer>
    </>
  );
}

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background: rgba(27, 156, 133, 0.16);
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  height: 7vh;
`;
const Button = styled.button`
  background-color: white;
  font-family: 'Pretendard-bold';
  font-size: 16px;
  display: flex;
  border: none;
  border-bottom: ${props =>
    props.selected
      ? `2px solid ${theme.COLOR.MAIN.GREEN}`
      : `2px solid ${theme.COLOR.MAIN.WHITE}`};
  padding: 10px 0px;
  margin-right: 10px;
  cursor: pointer;
  color: ${props =>
    props.selected ? theme.COLOR.MAIN.BLACK : theme.COLOR.MAIN.GRAY};
  align-items: center;
  &:hover {
    color: ${theme.COLOR.MAIN.BLACK};
  }
`;
