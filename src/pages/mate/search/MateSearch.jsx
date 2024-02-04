import React from 'react';
import styled from 'styled-components';

import * as S from './MateSearch.style';
import Profile from '@/components/mate/Profile';

const Container = styled.div`
  margin-top: 30px;
`;

const MateSearchPage = ({ data }) => {
  return (
    <Container>
      {data?.length > 0 ? (
        data?.map((d, index) => <Profile key={index} profileData={d} />)
      ) : (
        <S.NoResult>
          <span>해당 이름의 메이트가 존재하지 않아요</span>
        </S.NoResult>
      )}
    </Container>
  );
};

export default MateSearchPage;
