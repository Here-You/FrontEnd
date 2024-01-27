import { useEffect, useState } from 'react';

import * as S from './RuleFollowModalPlus.style';
import RuleSearchResult from './RuleSearchResult';
import { getRuleSearchMate } from '@/apis/request/mate';

const RuleFollowModalPlus = ({ onClose, setSelectedProfile }) => {
  const [profilesData, setProfilesData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [localSelectedProfile, setLocalSelectedProfile] = useState(null);

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

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearchButtonClick();
    }
  };

  const handleProfileClick = profile => {
    setLocalSelectedProfile(profile);
  };

  const handleInviteClick = async () => {
    if (localSelectedProfile) {
      try {
        // await postInvitation(selectedProfile);
        // alert('초대가 성공적으로 보내졌습니다.');
        setSelectedProfile(localSelectedProfile);
        onClose();
      } catch (error) {
        console.error('초대를 보내는데 실패했습니다.', error);
      }
    } else {
      alert('초대할 메이트를 선택해주세요.');
    }
  };

  const handleSearchButtonClick = () => {
    setSearchTerm(inputValue);
    // const filteredProfiles = profilesData.filter(
    //   profile => profile.name === inputValue || profile.nickname === inputValue,
    // );
    const filteredProfiles = profilesData.filter(
      profile =>
        profile.name.includes(inputValue) ||
        profile.nickname.includes(inputValue),
    );
    setFilteredProfiles(filteredProfiles);
  };

  return (
    <S.ModalBase>
      <S.ModalContainer>
        <S.WrapContainer>
          <span>초대할 메이트의 아이디를 입력하세요.</span>
          <S.SearchContainer>
            <S.UserInput
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <S.SearchButton onClick={handleSearchButtonClick} />
          </S.SearchContainer>
        </S.WrapContainer>

        <S.PlusContainer>
          {searchTerm === '' ? (
            <></>
          ) : filteredProfiles.length > 0 ? (
            filteredProfiles.map((profileData, index) => (
              <RuleSearchResult
                key={index}
                profileData={profileData}
                onClick={() => handleProfileClick(profileData)}
              />
            ))
          ) : (
            <S.NoResult>
              <span>해당 이름의 메이트가 존재하지 않아요</span>
            </S.NoResult>
          )}
        </S.PlusContainer>

        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.OkButton onClick={handleInviteClick}>초대하기</S.OkButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default RuleFollowModalPlus;
