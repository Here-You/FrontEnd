import { useState } from 'react';

import * as S from './RuleBox.style';

const RuleBox = ({
  title,
  setTitle,
  content,
  setContent,
  handleClick,
  selectedProfile,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.InputContainer>
      <S.Topcontainer>
        <S.LineWrapper>
          <S.StyledTitle
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <S.PlusButton onClick={handleClick} />
        </S.LineWrapper>
        <S.Participant>
          {selectedProfile && (
            <>
              <img src={selectedProfile.image} alt="프로필 이미지" />
              <span>{selectedProfile.name}</span>
            </>
          )}
        </S.Participant>
      </S.Topcontainer>
      <S.InputBox value={content} onChange={e => setContent(e.target.value)} />

      {isModalOpen && <ParticipantModal onClose={handleCloseModal} />}
    </S.InputContainer>
  );
};

export default RuleBox;
