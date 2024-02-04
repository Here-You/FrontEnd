import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Preview from './Preview';
import { getSignaturePreview } from '@/apis/request/preview';

export default function SearchResult() {
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
  return (
    <PageContainer>
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
  width: 100%;
  margin: 0 auto;
  justify-content: center;
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
  width: 100%;

  margin: 0 auto;
`;
