import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import RuleSearchResult from './RuleSearchResult';
import * as S from './SearchInviteMateModal.style';
import { useSearchInviteMate } from '@/hooks/mate/useSearchInviteMate';

const SearchInviteMateModal = ({ onClose, setSelectedProfiles }) => {
  const [localSelectedProfile, setLocalSelectedProfile] = useState(null);
  const [inputSearchTerm, setInputSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('searchTerm') || '';
  const { data, loading, error } = useSearchInviteMate(searchTerm);

  const handleSubmitForm = e => {
    e.preventDefault();
    navigate(
      `/mate/rule-write?searchTerm=${encodeURIComponent(inputSearchTerm)}`,
    );
  };

  const handleProfileClick = profile => {
    setLocalSelectedProfile(profile);
    setIsactive(!isactive);
  };

  const handleInviteClick = async () => {
    if (localSelectedProfile) {
      setSelectedProfiles(prevProfiles => [
        ...prevProfiles,
        localSelectedProfile,
      ]);
    }
    onClose();
  };

  return (
    <S.ModalBase>
      <S.ModalContainer>
        <S.WrapContainer>
          <span>초대할 메이트의 아이디를 입력하세요.</span>
          <S.SearchContainer onSubmit={handleSubmitForm}>
            <S.UserInput
              value={inputSearchTerm}
              onChange={e => setInputSearchTerm(e.target.value)}
            />
            <S.SearchButton type="submit" />
          </S.SearchContainer>
        </S.WrapContainer>

        <S.PlusContainer>
          {searchTerm ? (
            data.length > 0 ? (
              data.map((d, index) => (
                <RuleSearchResult
                  key={index}
                  profileData={d}
                  onClick={() => handleProfileClick(d)}
                />
              ))
            ) : (
              <S.NoResult>
                <span>해당 이름의 메이트가 존재하지 않아요</span>
              </S.NoResult>
            )
          ) : null}
        </S.PlusContainer>

        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.OkButton onClick={handleInviteClick}>초대하기</S.OkButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default SearchInviteMateModal;
