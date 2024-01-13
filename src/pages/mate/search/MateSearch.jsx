import React, { useEffect, useState } from 'react';

import { getMateSearch } from '@/apis/request/mate';
import Profile from '@/components/mate/Profile';

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
    <div>
      {profilesData.map((profileData, index) => (
        <Profile key={index} profileData={profileData} />
      ))}
    </div>
  );
};

export default MateSearchPage;
