import React, { useEffect, useState } from 'react';

import { getMateSearch } from '@/apis/request/mate';
import Profile from '@/components/mate/Profile';
import Search from '@/components/mate/Search';

const MateSearchPage = () => {
  const [profilesData, setProfilesData] = useState([]);

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

  return (
    <>
      <div style={{ marginBottom: '18.93px' }}>
        <Search />
      </div>
      {profilesData.map((profileData, index) => (
        <Profile key={index} profileData={profileData} />
      ))}
    </>
  );
};

export default MateSearchPage;
