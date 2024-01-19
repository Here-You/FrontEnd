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
        {data.length > 0 ? ( // data가 비어있지 않으면 Preview 컴포넌트 렌더링
          data.map((item, index) => <Preview key={index} {...item} />)
        ) : (
          <NoSignature /> // data가 비어있으면 NoSignature 컴포넌트 렌더링
        )}
      </S.PreviewContainer>
    </S.PageContainer>
  );
}
