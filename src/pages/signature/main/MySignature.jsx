import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SignaturePreview from '../components/SignaturePreview';
import { getSignaturePreview } from '@/apis/request/preview';

export default function MySignature() {
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
    <Wrap>
      <SignaturePreview {...data[0]} />
      <SignaturePreview {...data[1]} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
