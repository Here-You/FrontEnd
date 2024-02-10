import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import * as S from './MateRuleWrite.style';
import PlusUser from '/images/mate/add-user.svg';
import { postCreateMateRule } from '@/apis/request/mate';
import InviteMatesModal from '@/components/modal/inviteMatesModal/InviteMatesModal';
import useInviteMatesModal from '@/hooks/modal/useInviteMatesModal';
import useMatesStore from '@/store/matesStore';

const MateRuleWritePage = () => {
  const navigate = useNavigate();
  const inviteMatesModal = useInviteMatesModal();
  const selectedMates = useMatesStore(state => state.selectedMates);
  const [title, setTitle] = useState('');
  const [rules, setRules] = useState([{ ruleTitle: '', ruleDetail: '' }]);

  const handleAddRule = () => {
    if (rules.length < 10) {
      setRules([...rules, { ruleTitle: '', ruleDetail: '' }]);
    }
  };

  const handleRemoveRule = item => {
    setRules(prevRules => prevRules.filter((_, index) => index !== item));
  };

  const handleSubmitRule = () => {
    const postData = {
      mainTitle: title,
      rulePairs: rules,
      membersId: selectedMates.map(mate => mate.id),
    };
    console.log(postData);

    postCreateMateRule(postData)
      .then(() => {
        toast.success('규칙을 성공적으로 작성하였습니다.');
        navigate('/mate');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <S.Container>
      <InviteMatesModal />
      <S.Wrapper>
        <S.Header>
          <S.TitleInput
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="규칙 제목을 입력해주세요."
          />
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
            <S.ContentBox key={index}>
              <S.TextContainer>
                <S.ContentTitleInput
                  placeholder={`규칙 ${index + 1}을 입력해주세요!`}
                  value={rule.ruleTitle}
                  onChange={e => {
                    const newRules = [...rules];
                    newRules[index].ruleTitle = e.target.value;
                    setRules(newRules);
                  }}
                />
                <S.ContentTextInput
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
                <S.DeleteRuleButton onClick={() => handleRemoveRule(index)}>
                  X
                </S.DeleteRuleButton>
              </S.TextContainer>
            </S.ContentBox>
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
      <S.SubmitBtn onClick={handleSubmitRule}>발행하기</S.SubmitBtn>
    </S.Container>
  );
};

export default MateRuleWritePage;
