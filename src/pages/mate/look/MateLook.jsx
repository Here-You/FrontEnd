import React, { useEffect, useState } from 'react';

import * as S from './MateLook.style';
import mateSearchIcon from '/images/mate/mate_search.svg';
import { getMateLook } from '@/apis/request/mate';
import Banner from '@/components/mate/Banner';
import MateSignatureSection from '@/components/mate/MateSignatureSection';

const MateLookPage = () => {
  const [matesData, setMatesData] = useState([]);

  useEffect(() => {
    const fetchMateData = async () => {
      try {
        const response = await getMateLook();
        setMatesData(response.data);
      } catch (error) {
        console.error('데이터를 가져오는데 실패했습니다.', error);
      }
    };
    fetchMateData();
  }, []);

  return (
    <S.MateLookContainer>
      <Banner />
      <S.CenteredContainer>
        <MateSignatureSection
          text="샐리님이 사용한 위치 [일본,오사카]을 함께 이용 중인 메이트"
          matesData={matesData}
        />

        <MateSignatureSection
          text="샐리님이 사용한 위치 [서울,강릉]을 함께 이용 중인 메이트"
          matesData={matesData}
        />
      </S.CenteredContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
