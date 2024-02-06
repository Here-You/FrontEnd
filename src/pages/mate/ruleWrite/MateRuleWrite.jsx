import { useState } from 'react';

import * as S from './MateRuleWrite.style';
import PlusUser from '/images/mate/add-user.svg';
import InviteMatesModal from '@/components/modal/inviteMatesModal/InviteMatesModal';
import useInviteMatesModal from '@/hooks/modal/useInviteMatesModal';
import useMatesStore from '@/store/matesStore';

const MateRuleWritePage = () => {
  const inviteMatesModal = useInviteMatesModal();
  const selectedMates = useMatesStore(state => state.selectedMates);
  const [rules, setRules] = useState([{ ruleTitle: '', ruleDetail: '' }]);

  const handleAddRule = () => {
    if (rules.length < 10) {
      setRules([...rules, { ruleTitle: '', ruleDetail: '' }]);
    }
  };

  const handleRemoveRule = item => {
    setRules(prevRules => prevRules.filter((rule, index) => index !== item));
  };

  console.log(rules);
  return (
    <S.Container>
      <InviteMatesModal />
      <S.Wrapper>
        <S.Header>
          <h1>제주여행을 떠나면</h1>
          <S.PlusSvg src={PlusUser} onClick={() => inviteMatesModal.onOpen()} />
        </S.Header>
        <S.MatesContainer>
          {selectedMates.map(s => (
            <>
              <S.MatesImages src={s.image} />
            </>
          ))}
        </S.MatesContainer>
        <S.Content>
          {rules.map((rule, index) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={index}>
              <div>
                <S.TitleInput
                  placeholder={`규칙 ${index + 1}을 입력해주세요!`}
                  value={rule.ruleTitle}
                  onChange={e => {
                    const newRules = [...rules];
                    newRules[index].ruleTitle = e.target.value;
                    setRules(newRules);
                  }}
                />
                <S.TextInput
                  placeholder={`규칙 ${index + 1} 내용을 입력해주세요!`}
                  value={rule.ruleDetail}
                  onChange={e => {
                    const newRules = [...rules];
                    newRules[index].ruleDetail = e.target.value;
                    setRules(newRules);
                  }}
                  rows="5"
                  columns="2"
                />
              </div>
              <S.DeleteRuleButton onClick={() => handleRemoveRule(index)}>
                X
              </S.DeleteRuleButton>
            </div>
          ))}
        </S.Content>
        <S.AddButtonWrapper>
          {rules.length < 10 && (
            <S.AddQuestionButton onClick={handleAddRule}>
              규칙 추가하기
            </S.AddQuestionButton>
          )}
        </S.AddButtonWrapper>
      </S.Wrapper>
      <S.SubmitBtn>발행하기</S.SubmitBtn>
    </S.Container>
  );
};

export default MateRuleWritePage;
