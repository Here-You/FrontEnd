import { useState } from 'react';

import ParticipantModal from './ParticipantModal';
import * as S from './RuleBoxCheck.style';
import overIcon from '/images/mate/over.svg';
import { patchTeamMateRule } from '@/apis/request/mate';

const RuleBoxCheck = ({ ruleboxData, participantsData }) => {
  const [participantModalOpen, setParticipantModalOpen] = useState(false);

  const handleParticipantClick = () => {
    setParticipantModalOpen(true);
  };

  return (
    <S.InputContainer>
      <S.Topcontainer>
        <S.LineWrapper>
          <S.StyledTitle>
            {ruleboxData && ruleboxData?.main_title}
          </S.StyledTitle>
          <S.EditButton onClick={() => handleEditButton()}>수정</S.EditButton>
        </S.LineWrapper>

        {participantsData && (
          <S.Participant onClick={handleParticipantClick}>
            {participantsData.slice(0, 2).map(profile => (
              <S.ParticipantImg key={profile.id}>
                <img src={profile.image} alt="프로필 이미지" />
              </S.ParticipantImg>
            ))}
            {/* {participantsData.slice(0, 2).map(profile => (
            <S.ParticipantName key={profile.id}>
              <span>{profile.name}</span>
            </S.ParticipantName>
          ))} */}
            {participantsData.length > 2 && (
              <S.ParticipantOver src={overIcon} alt="over icon" />
            )}
          </S.Participant>
        )}
      </S.Topcontainer>

      <S.RuleContainer>
        {ruleboxData?.rules &&
          ruleboxData?.rules?.map((rule, index) => (
            <S.SmallRule key={index}>
              <S.RuleTitle>{rule.rule_title}</S.RuleTitle>
              <S.RuleDetail>{rule.rule_detail}</S.RuleDetail>
            </S.SmallRule>
          ))}
      </S.RuleContainer>

      {participantModalOpen && (
        <ParticipantModal onClose={() => setParticipantModalOpen(false)} />
      )}
    </S.InputContainer>
  );
};

export default RuleBoxCheck;
