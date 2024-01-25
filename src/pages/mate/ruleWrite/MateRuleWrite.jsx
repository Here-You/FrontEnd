import { useState } from 'react';

import * as S from './MateRuleWrite.style';
import RuleButton from '@/components/mate/RuleButton';

const MateRuleWritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <S.CenteredContainer>
      <S.InputContainer>
        <S.Topcontainer>
          <S.LineWrapper>
            <S.StyledTitle
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <S.PlusButton />
          </S.LineWrapper>

          <S.Participant />
        </S.Topcontainer>
        <S.InputBox
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </S.InputContainer>
      <S.ButtonWrapper>
        <RuleButton text="발행하기" />
      </S.ButtonWrapper>
    </S.CenteredContainer>
  );
};

export default MateRuleWritePage;
