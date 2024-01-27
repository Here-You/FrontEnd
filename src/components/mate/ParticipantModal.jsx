import { useEffect, useState } from 'react';

import * as S from './ParticipantModal.style';
import RuleSearchResult from './RuleSearchResult';
import { getRuleSearchMate } from '@/apis/request/mate';

const ParticipantModal = ({ onClose }) => {
  const [profilesData, setProfilesData] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getRuleSearchMate();
        setProfilesData(response.data || []);
      } catch (error) {
        console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <S.ModalBase>
      <S.ModalContainer>
        <S.WrapContainer>
          <span>참여 중인 인원</span>
          <button></button>
        </S.WrapContainer>

        {profilesData.map((profileData, index) => (
          <RuleSearchResult
            key={index}
            profileData={profileData}
            onClick={() => handleProfileClick(profileData)}
          />
        ))}

        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.OkButton onClick={onClose}>완료</S.OkButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default ParticipantModal;
