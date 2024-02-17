import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './RuleEdit.style';
import PlusUser from '/images/mate/add-user.svg';
import Logo from '/images/mypage/MyPageLogo.svg';
import { updateTeamMateRule } from '@/apis/request/mate';
import InviteMatesModal from '@/components/modal/inviteMatesModal/InviteMatesModal';
import { useTeamMateRulePost } from '@/hooks/mate/useTeamMateRulePost';
import useInviteMatesModal from '@/hooks/modal/useInviteMatesModal';
import useMatesStore from '@/store/matesStore';

const RuleEditPage = () => {
  const navigate = useNavigate();
  const { ruleId } = useParams();
  const { data, loading, error } = useTeamMateRulePost(ruleId);
  const initialData = data;

  const inviteMatesModal = useInviteMatesModal();
  const {
    selectedMates,
    addSelectedMate,
    removeSelectedMate,
    clearSelectedMates,
  } = useMatesStore();
  const [postData, setPostData] = useState({
    mainTitle: '',
    rulePairs: [],
    membersId: [],
  });

  useEffect(() => {
    if (initialData) {
      setPostData({
        mainTitle: initialData.mainTitle || '',
        rulePairs: initialData.rulePairs || [],
        membersId: initialData.detailMembers || [],
      });
    }
  }, [initialData, selectedMates]);

  useEffect(() => {
    const membersIdArray = selectedMates.map(mate => mate.id);
    setPostData(prevData => ({ ...prevData, membersId: membersIdArray }));
  }, [selectedMates]);

  const handleAddRule = () => {
    if (postData.rulePairs.length < 10) {
      const newRuleNumber = postData.rulePairs.length + 1;
      setPostData(prevData => ({
        ...prevData,
        rulePairs: [
          ...prevData.rulePairs,
          {
            ruleNumber: newRuleNumber,
            ruleTitle: '',
            ruleDetail: '',
            id: null,
          },
        ],
      }));
    }
  };

  const handleRemoveRule = index => {
    setPostData(prevData => ({
      ...prevData,
      rulePairs: prevData.rulePairs.filter((_, i) => i !== index),
    }));
  };

  const handleSubmitRule = () => {
    const sortedRulePairs = postData.rulePairs.map((rule, index) => ({
      ...rule,
      ruleNumber: index + 1,
      id: rule.id === null ? null : rule.id,
    }));

    const extractMembersId = selectedMates.map(mate => mate.id);

    const postDataWithId = {
      mainTitle: postData.mainTitle,
      rulePairs: sortedRulePairs,
      membersId: extractMembersId,
    };

    updateTeamMateRule(ruleId, { postDataWithId })
      .then(() => {
        toast.success('규칙을 성공적으로 수정하였습니다.');
        navigate(`/mate/rule-check/${ruleId}`);
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
            value={postData.mainTitle}
            onChange={e =>
              setPostData({ ...postData, mainTitle: e.target.value })
            }
            placeholder="규칙 제목을 입력해주세요."
          />
          <S.PlusSvg src={PlusUser} onClick={() => inviteMatesModal.onOpen()} />
        </S.Header>
        <S.MatesContainer>
          {selectedMates.map(s => (
            <>
              <S.MatesImages src={s.image ? s.image : Logo} />
            </>
          ))}
        </S.MatesContainer>
        <S.Content>
          {postData.rulePairs.map((rule, index) => (
            <S.ContentBox key={rule.id || index}>
              <S.TextContainer>
                <S.ContentTitleInput
                  placeholder={`규칙 ${index + 1}을 입력해주세요!`}
                  value={rule.ruleTitle}
                  onChange={e => {
                    const newRulePairs = [...postData.rulePairs];
                    newRulePairs[index].ruleTitle = e.target.value;
                    setPostData({ ...postData, rulePairs: newRulePairs });
                  }}
                />
                <S.ContentTextInput
                  placeholder={`규칙 ${index + 1} 내용을 입력해주세요!`}
                  value={rule.ruleDetail}
                  onChange={e => {
                    const newRulePairs = [...postData.rulePairs];
                    newRulePairs[index].ruleDetail = e.target.value;
                    setPostData({ ...postData, rulePairs: newRulePairs });
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
          {postData.rulePairs.length < 10 && (
            <S.AddQuestionButton onClick={handleAddRule}>
              규칙 추가하기
            </S.AddQuestionButton>
          )}
        </S.AddButtonWrapper>
      </S.Wrapper>
      <S.SubmitBtn onClick={handleSubmitRule}>저장하기</S.SubmitBtn>
    </S.Container>
  );
};

export default RuleEditPage;
