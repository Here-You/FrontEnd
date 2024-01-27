import { useState } from 'react';

import * as S from './MateRuleWrite.style';
import RuleBox from '@/components/mate/RuleBox';
import RuleButton from '@/components/mate/RuleButton';
import RuleFollowModalPlus from '@/components/mate/RuleFollowModalPlus';

const MateRuleWritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleClick = () => {
    setModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePublishClick = () => {
    if (title && content && selectedProfile) {
      console.log('Title:', title);
      console.log('Content:', content);
      console.log('Selected Profile:', selectedProfile);
    } else {
      alert('제목, 내용, 초대할 메이트를 모두 입력해주세요.');
    }
  };

  return (
    <S.CenteredContainer>
      <RuleBox
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleClick={handleClick}
        selectedProfile={selectedProfile}
      />
      <S.ButtonWrapper>
        <RuleButton text="발행하기" onClick={handlePublishClick} />
      </S.ButtonWrapper>
      {isModalOpen && (
        <RuleFollowModalPlus
          onClose={handleCloseModal}
          setSelectedProfile={setSelectedProfile}
        />
      )}
    </S.CenteredContainer>
  );
};

export default MateRuleWritePage;
