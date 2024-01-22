import React, { useEffect, useState } from 'react';

import * as S from './MateManagement.style';
import { getMateManagement } from '@/apis/request/mate';
import ManagementProfile from '@/components/mate/ManagementProfile';

const MateManagementPage = () => {
  const [activeTab, setActiveTab] = useState(null);

  const [profilesData, setProfilesData] = useState([]);

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getMateManagement();
        setProfilesData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <>
      <S.CenteredContainer>
        <S.TabContainer>
          <S.TabElement
            active={activeTab === 'follower'}
            onClick={() => handleTabClick('follower')}>
            팔로워
          </S.TabElement>
          <S.TabElement
            active={activeTab === 'following'}
            onClick={() => handleTabClick('following')}>
            팔로잉
          </S.TabElement>
        </S.TabContainer>
      </S.CenteredContainer>

      {profilesData.map((profileData, index) => (
        <ManagementProfile key={index} profileData={profileData} />
      ))}
    </>
  );
};

export default MateManagementPage;
