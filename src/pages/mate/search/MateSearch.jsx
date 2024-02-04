import React from 'react';

import * as S from './MateSearch.style';
import Profile from '@/components/mate/Profile';

const MateSearchPage = ({ data }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {data?.length > 0 ? (
        data?.map((d, index) => <Profile key={index} profileData={d} />)
      ) : (
        <S.NoResult>
          <span>해당 이름의 메이트가 존재하지 않아요</span>
        </S.NoResult>
      )}
    </div>
  );
};

export default MateSearchPage;
