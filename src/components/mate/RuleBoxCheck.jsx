import { useState } from 'react';

import ParticipantModal from './ParticipantModal';
import * as S from './RuleBoxCheck.style';
import SearchInviteMateModal from './SearchInviteMateModal';
import overIcon from '/images/mate/over.svg';

const RuleBoxCheck = ({ mainTitle, rules, participants }) => {
  console.log(mainTitle);
  console.log(rules);
  console.log(participants);
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
        <S.StyledTitle>{mainTitle}</S.StyledTitle>

        <S.Participant onClick={handleParticipantClick}>
          {participants.slice(0, 2).map(profile => (
            <S.ParticipantImg key={profile.id}>
              <img src={profile.image} alt="프로필 이미지" />
            </S.ParticipantImg>
          ))}
          {/* {participants.slice(0, 2).map(profile => (
            <S.ParticipantName key={profile.id}>
              <span>{profile.name}</span>
            </S.ParticipantName>
          ))} */}
          {participants.length > 2 && (
            <S.ParticipantOver src={overIcon} alt="over icon" />
          )}
        </S.Participant>
      </S.Topcontainer>

      <S.InputBox>
        {rules.map((rule, index) => (
          <div key={index}>
            <S.RuleTitle>{rule.ruleTitle}</S.RuleTitle>
            <S.RuleDetail>{rule.ruleDetail}</S.RuleDetail>
          </div>
        ))}
      </S.InputBox>

      {searchMateModal && (
        <SearchInviteMateModal
          onClose={() => {
            handleSearchMateModal();
            window.history.replaceState(
              {},
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

export default RuleBoxCheck;
