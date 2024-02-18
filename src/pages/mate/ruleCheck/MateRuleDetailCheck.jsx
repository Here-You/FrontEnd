import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './MateRuleDetailCheck.style';
import MateRuleDetailSkeleton from './MateRuleDetailSkeleton/MateRuleDetailSkeleton';
import Logo from '/images/mypage/MyPageLogo.svg';
import MateCommentList from '@/components/comment/mate/MateCommentList';
import MateCommentInput from '@/components/comment/mate/commentInput/MateCommentInput';
import { useTeamMateRulePost } from '@/hooks/mate/useTeamMateRulePost';

const MateRuleDetailCheckPage = () => {
  const [editMode, setEditMode] = useState(false);
  const { ruleId } = useParams();
  const { data, loading, error } = useTeamMateRulePost(ruleId);

  const navigate = useNavigate();

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <>
      {loading ? (
        <MateRuleDetailSkeleton />
      ) : (
        <S.Container>
          <S.Wrapper>
            <S.Header>
              <S.Title>{data?.mainTitle}</S.Title>
              <S.ProfileContainer>
                {data?.detailMembers?.slice(0, 5).map(p => (
                  <S.ProfileBox key={p.id}>
                    <S.ProfileImages src={p.image ? p.image : Logo} />
                    <h3>{p.name}</h3>
                  </S.ProfileBox>
                ))}
                {data?.detailMembers?.length > 5 && ( //
                  <S.ProfileBox>
                    <h3>외 {data.detailMembers.length - 5} 명</h3>
                  </S.ProfileBox>
                )}
              </S.ProfileContainer>
            </S.Header>
            <S.Content>
              {data?.rulePairs?.map((rule, index) => (
                <S.TextContainer key={rule.id}>
                  <h3>{rule.ruleTitle}</h3>
                  <p>{rule.ruleDetail}</p>
                </S.TextContainer>
              ))}
            </S.Content>
          </S.Wrapper>
          {editMode ? (
            <S.UpdateBtn
              onClick={() => {
                handleSubmit();
                setEditMode(false);
              }}>
              저장하기
            </S.UpdateBtn>
          ) : (
            <S.UpdateBtn onClick={() => navigate(`/mate/rule-edit/${ruleId}`)}>
              수정하기
            </S.UpdateBtn>
          )}
          <MateCommentInput ruleId={ruleId} />
          <S.CommentsContainer>
            <MateCommentList ruleId={ruleId} />
          </S.CommentsContainer>
        </S.Container>
      )}
    </>
  );
};

export default MateRuleDetailCheckPage;
