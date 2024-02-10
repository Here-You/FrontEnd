import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

// assuming toast is imported
import * as S from './RuleEdit.style';
import PlusUser from '/images/mate/add-user.svg';
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
  const selectedMates = useMatesStore(state => state.selectedMates);
  const [postData, setPostData] = useState({
    mainTitle: '',
    rulePairs: [],
    membersId: [],
  });

  console.log(postData);

  useEffect(() => {
    if (initialData) {
      setPostData({
        mainTitle: initialData.mainTitle || '',
        rulePairs: initialData.rulePairs || [],
        membersId: initialData.detailMembers || [],
      });
    }
  }, [initialData, selectedMates]);

  const handleAddRule = () => {
    if (postData.rulePairs.length < 10) {
      setPostData(prevData => ({
        ...prevData,
        rulePairs: [...prevData.rulePairs, { ruleTitle: '', ruleDetail: '' }],
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
    postCreateMateRule(postData)
      .then(() => {
        toast.success('규칙을 성공적으로 수정하였습니다.');
        navigate(`/mate/${ruleId}`);
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
            <S.MatesImages key={s.id} src={s.image} />
          ))}
        </S.MatesContainer>
        <S.Content>
          {postData.rulePairs.map((rule, index) => (
            <S.ContentBox key={index}>
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
      <S.SubmitBtn onClick={handleSubmitRule}>수정하기</S.SubmitBtn>
    </S.Container>
  );
};

export default RuleEditPage;
