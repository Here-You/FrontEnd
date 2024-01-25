import { useState } from 'react';

import * as S from './MateRuleWrite.style';
import RuleBox from '@/components/mate/RuleBox';
import RuleButton from '@/components/mate/RuleButton';
import RuleFollowModal from '@/components/mate/RuleFollowModal';

const MateRuleWritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <S.CenteredContainer>
      <RuleBox
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleClick={handleClick}
      />
      <S.ButtonWrapper>
        <RuleButton text="발행하기" />
      </S.ButtonWrapper>
      {isModalOpen && <RuleFollowModal onClose={handleCloseModal} />}
    </S.CenteredContainer>
  );
};

export default MateRuleWritePage;
