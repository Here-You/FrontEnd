import { useState } from 'react';

import ParticipantMate from './ParticipantMate';
import * as S from './ParticipantModal.style';
import SearchInviteMateModal from './SearchInviteMateModal';
import { useParticipateTeamMate } from '@/hooks/mate/useParticipateTeamMate';

const ParticipantModal = ({ onClose, setSelectedProfiles }) => {
  const { data: profilesData, loading, error } = useParticipateTeamMate();
  const [searchMateModal, setSearchMateModal] = useState(false);

  const handleSearchMateModal = () => {
    setSearchMateModal(!searchMateModal);
  };

  const handlePlusButtonClick = () => {
    handleSearchMateModal();
  };

  const handleProfileClick = profileData => {
    setSelectedProfiles(prevProfiles => [...prevProfiles, profileData]);
  };

  return (
    <S.ModalBase>
      <S.ModalContainer>
        <S.WrapContainer>
          <S.StyledTitle>참여 중인 인원</S.StyledTitle>
          <S.PlusButton onClick={handlePlusButtonClick} />
        </S.WrapContainer>

        {profilesData.map((profileData, index) => (
          <ParticipantMate
            key={index}
            profileData={profileData}
            onClick={() => handleProfileClick(profileData)}
          />
        ))}

        {searchMateModal && (
          <SearchInviteMateModal
            onClose={() => {
              handleSearchMateModal();
              window.history.replaceState(
                document.title,
                window.location.pathname,
              );
            }}
            setSelectedProfiles={setSelectedProfiles}
          />
        )}

        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.OkButton onClick={onClose}>완료</S.OkButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default ParticipantModal;
