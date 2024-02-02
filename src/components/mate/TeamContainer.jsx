import { useState } from 'react';

import ExitModal from './ExitModal';
import * as S from './TeamContainer.style';
import over from '/images/mate/over.svg';

const TeamContainer = ({ ruleData }) => {
  if (!ruleData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { participant_cnt, title, last_updated_date, participants } = ruleData;

  const [showExitModal, setShowExitModal] = useState(false);

  const handleExitButtonClick = () => {
    setShowExitModal(true);
  };

  const handleCloseExitModal = () => {
    setShowExitModal(false);
    onClose();
  };

  return (
    <S.TeamContainer>
      <S.TeamInfoContainer>
        <S.ImgContainer>
          {participants.slice(0, 2).map((participant, index) => (
            <S.TeammateImg key={index} src={participant.image} index={index} />
          ))}
          {participant_cnt >= 4 && <S.OverImg src={over} alt="over" />}
        </S.ImgContainer>
        <S.TeammateNum>{participant_cnt}명</S.TeammateNum>
      </S.TeamInfoContainer>

      <S.TeamTitle>{title}</S.TeamTitle>

      <S.ExitContainer>
        <S.ExitButton onClick={handleExitButtonClick}>나가기</S.ExitButton>
        <S.WriteDate>{last_updated_date}</S.WriteDate>
      </S.ExitContainer>
      {showExitModal && <ExitModal onClose={handleCloseExitModal} />}
    </S.TeamContainer>
  );
};

export default TeamContainer;
