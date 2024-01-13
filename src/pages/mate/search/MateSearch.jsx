import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMateSearch } from '@/apis/request/mate';
import Profile from '@/components/mate/Profile';
import Search from '@/components/mate/Search';

const MateSearchPage = () => {
  const [profilesData, setProfilesData] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('userid'); // URL 쿼리 파라미터에서 'userId' 값을 가져옴

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getMateSearch(searchTerm);
        setProfilesData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
      }
    };

    // 검색어가 변경되면 검색 결과를 다시 가져옴
    if (searchTerm) {
      fetchProfileData();
    }
  }, [searchTerm]);

  return (
    <div>
      <div style={{ marginBottom: '18.93px' }}>
        <Search />
      </div>
      {profilesData.map((profileData, index) => (
        <Profile key={index} profileData={profileData} />
      ))}
    </div>
  );
};

export default MateSearchPage;
