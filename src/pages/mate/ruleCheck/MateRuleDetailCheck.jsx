import React from 'react';
import { useParams } from 'react-router-dom';

import * as S from './MateRuleDetailCheck.style';
import { Comment } from '@/components';
import { useTeamMateRule } from '@/hooks/mate/useTeamMateRule';

const MateRuleDetailCheckPage = () => {
  const { ruleId } = useParams();
  const { data, loading, error } = useTeamMateRule(ruleId);
  // 본인이 해당 게시글의 유저인지 validation 하는 로직 필요.

  if (loading) {
    return <div>로딩 중 입니다..</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>{data?.detailRule?.mainTitle}</S.Title>
          <S.ProfileContainer>
            {data?.detailMembers?.map(p => (
              <S.ProfileBox key={p.memberId}>
                <S.ProfileImages src={p.image} />
                <h3>{p.name}</h3>
              </S.ProfileBox>
            ))}
          </S.ProfileContainer>
        </S.Header>

        <S.Content>
          {data?.detailRule?.rulePairs?.map(rule => (
            <S.TextContainer key={rule.id}>
              <h3>{rule.ruleTitle}</h3>
              <p>{rule.ruleDetail}</p>
            </S.TextContainer>
          ))}
        </S.Content>
      </S.Wrapper>
      <S.UpdateBtn>수정하기</S.UpdateBtn>

      {data?.comments?.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </S.Container>
  );
};

export default MateRuleDetailCheckPage;
