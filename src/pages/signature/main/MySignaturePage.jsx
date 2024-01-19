import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Preview from '../components/Preview';
import { getSignaturePreview } from '@/apis/request/preview';

export default function MySignaturePage() {
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
    <PreviewContainer>
      <Preview {...data[0]} />
      <Preview {...data[0]} />
      <Preview {...data[0]} />
      <Preview {...data[0]} />
      <Preview {...data[0]} />
      <Preview {...data[0]} />
      <Preview {...data[0]} />
      <Preview {...data[0]} />
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
