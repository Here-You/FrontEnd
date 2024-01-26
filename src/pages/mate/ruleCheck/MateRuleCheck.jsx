import { useEffect, useState } from 'react';

import * as S from './MateRuleCheck.style';
import { getRuleCheck } from '@/apis/request/mate';
import TeamContainer from '@/components/mate/TeamContainer';

const MateRuleCheckPage = () => {
  const [profilesData, setProfilesData] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getRuleCheck();
        setProfilesData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div>
      <S.CenteredContainer>
        <S.StyledTitle>내가 참여 중인 규칙</S.StyledTitle>
        {profilesData.map((profileData, index) => (
          <TeamContainer key={index} profileData={profileData} />
        ))}
      </S.CenteredContainer>
    </div>
  );
};

export default MateRuleCheckPage;
