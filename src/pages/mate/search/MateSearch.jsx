import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './MateSearch.style';
import { getMateSearch } from '@/apis/request/mate';
import Profile from '@/components/mate/Profile';

const MateSearchPage = () => {
  const [profilesData, setProfilesData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('searchTerm') || '';

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getMateSearch();
        setProfilesData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
      }
    };
    fetchProfileData();
  }, []);

  const filteredProfiles = profilesData.filter(
    profile => profile.name === searchTerm || profile.nickname === searchTerm,
  );

  return (
    <div style={{ height: '100%' }}>
      {filteredProfiles.length > 0 ? (
        filteredProfiles.map((profileData, index) => (
          <Profile key={index} profileData={profileData} />
        ))
      ) : (
        <S.NoResult>
          <span>해당 이름의 메이트가 존재하지 않아요</span>
        </S.NoResult>
      )}
    </div>
  );
};

export default MateSearchPage;
