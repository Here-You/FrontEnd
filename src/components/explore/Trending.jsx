import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Preview from './Preview';
import { getSignaturePreview } from '@/apis/request/preview';

export default function Trending() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await getSignaturePreview();
      const mockData = res.data;
      setData(mockData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer>
      <Title>인기 급상승 시그니처🔥</Title>
      <PreviewContainer>
        {data.map((item, index) => (
          <Preview key={index} {...item} />
        ))}
      </PreviewContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 20px;
`;
const Title = styled.div`
  display: flex;
  font-family: 'Pretendard-bold';
  margin-left: 10px;
`;
const PreviewContainer = styled.div`
  display: flex;
  overflow: scroll;
  flex-wrap: wrap;

  justify-content: center;

  height: 30vh;
`;
