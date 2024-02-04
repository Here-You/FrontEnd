import { useState } from 'react';

import ParticipantModal from './ParticipantModal';
import * as S from './RuleBox.style';
import SearchInviteMateModal from './SearchInviteMateModal';
import overIcon from '/images/mate/over.svg';

const RuleBox = ({
  mainTitle,
  setMainTitle,
  rules,
  setRules,
  selectedProfiles,
  setSelectedProfiles,
}) => {
  const [searchMateModal, setSearchMateModal] = useState(false);
  const [participantModalOpen, setParticipantModalOpen] = useState(false);

  const addRule = () => {
    if (rules.length < 10) {
      setRules([
        ...rules,
        {
          ruleTitle: '',
          ruleDetail: '',
        },
      ]);
    } else {
      alert('최대 10개의 규칙만 추가할 수 있습니다.');
    }
  };

  const updateRule = (index, updatedRule) => {
    const newRules = [...rules];
    newRules[index] = updatedRule;
    setRules(newRules);
    if (index === rules.length - 1) {
      addRule();
    }
  };

  const handleSearchMateModal = () => {
    setSearchMateModal(!searchMateModal);
  };

  const handleParticipantClick = () => {
    setParticipantModalOpen(true);
  };

  return (
    <S.InputContainer>
      <S.Topcontainer>
        <S.LineWrapper>
          <S.StyledTitle
            value={mainTitle}
            onChange={e => setMainTitle(e.target.value)}
          />
          <S.PlusButton onClick={handleSearchMateModal} />
        </S.LineWrapper>

        <S.Participant onClick={handleParticipantClick}>
          {selectedProfiles.slice(0, 2).map(profile => (
            <S.ParticipantImg key={profile.id}>
              <img src={profile.image} alt="프로필 이미지" />
            </S.ParticipantImg>
          ))}
          {selectedProfiles.slice(0, 2).map(profile => (
            <S.ParticipantName key={profile.id}>
              <span>{profile.name}</span>
            </S.ParticipantName>
          ))}
          {selectedProfiles.length > 2 && (
            <S.ParticipantOver src={overIcon} alt="over icon" />
          )}
        </S.Participant>
      </S.Topcontainer>
      
      <S.InputBox>
        {rules.map((rule, index) => (
          <div key={index}>
            <S.InputRuleTitle
              placeholder={`규칙${index + 1}의 제목을 입력해주세요.`}
              value={rule.ruleTitle}
              onChange={e =>
                updateRule(index, { ...rule, ruleTitle: e.target.value })
              }
            />
            <S.InputRuleDetail
              placeholder={`규칙${index + 1}의 내용을 입력해주세요.`}
              value={rule.ruleDetail}
              onChange={e =>
                updateRule(index, { ...rule, ruleDetail: e.target.value })
              }
            />
          </div>
        ))}
      </S.InputBox>

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

      {participantModalOpen && (
        <ParticipantModal onClose={() => setParticipantModalOpen(false)} />
      )}
    </S.InputContainer>
  );
};

export default RuleBox;
