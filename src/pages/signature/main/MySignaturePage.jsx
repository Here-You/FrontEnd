import React, { useEffect, useState } from 'react';

import Preview from '../components/Preview';
import * as S from './MySignaturePage.style';
import NoSignature from './NoSignature';
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
    <S.PageContainer>
      <S.PreviewContainer>
        {data.map((item, index) => (
          <Preview key={index} {...item} />
        ))}
      </S.PreviewContainer>
    </S.PageContainer>
  );
}
