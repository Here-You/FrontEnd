import { useState } from 'react';

import ParticipantMate from './ParticipantMate';
import * as S from './ParticipantModal.style';
import SearchInviteMateModal from './SearchInviteMateModal';

// updateInvitations,
//
const ParticipantModal = ({
  onClose,
  setSelectedProfiles,
  selectedProfiles,
}) => {
  const [searchMateModal, setSearchMateModal] = useState(false);

  const handleSearchMateModal = () => {
    setSearchMateModal(!searchMateModal);
  };

  const handlePlusButtonClick = () => {
    handleSearchMateModal();
  };

  // const handleProfileClick = profileData => {
  //   setSelectedProfiles(prevProfiles => [...prevProfiles, profileData]);
  // };            updateInvitations={updateInvitations}

  return (
    <S.ModalBase>
      <S.ModalContainer>
        <S.WrapContainer>
          <S.StyledTitle>참여 중인 인원</S.StyledTitle>
          <S.PlusButton onClick={handlePlusButtonClick} />
        </S.WrapContainer>

        <S.FixedContainer>
          {selectedProfiles.length === 0 ? (
            <S.NoParticipantsMessage>
              메이트를 초대해보세요.
            </S.NoParticipantsMessage>
          ) : (
            <S.ParticipantWrap>
              {selectedProfiles.map((profileData, index) => (
                <ParticipantMate
                  key={profileData._id}
                  profileData={profileData}
                  // onClick={() => handleProfileClick(profileData)}
                />
              ))}
            </S.ParticipantWrap>
          )}
        </S.FixedContainer>

        {searchMateModal && (
          <SearchInviteMateModal
            selectedProfiles={selectedProfiles}
            setSelectedProfiles={setSelectedProfiles}
            onClose={() => {
              setSearchMateModal(false);
              window.history.replaceState(
                document.title,
                window.location.pathname,
              );
            }}
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
