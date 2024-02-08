import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './MateRuleDetailCheck.style';
import { Comment } from '@/components';
import { useTeamMateRuleComment } from '@/hooks/mate/useTeamMateRuleComment';
import { useTeamMateRulePost } from '@/hooks/mate/useTeamMateRulePost';

const MateRuleDetailCheckPage = () => {
  const [editMode, setEditMode] = useState(false);
  const { ruleId } = useParams();
  // post 요청
  const { data, loading, error } = useTeamMateRulePost(ruleId);
  const titleRefs = useRef([]);
  const detailRefs = useRef([]);

  console.log(titleRefs.current[1]);

  // 댓글
  // const {data, loading, error} = useTeamMateRuleComment(ruleId, cursor, take)
  if (loading) {
    return <div>로딩 중 입니다..</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  const handleSubmit = () => {
    const editedContent = {
      mainTitle: data[0]?.mainTitle || '',
      rulePairs:
        data[0]?.rulePairs?.map((rule, index) => ({
          ruleTitle: titleRefs.current[index]?.innerText || '',
          ruleDetail: detailRefs.current[index]?.innerText || '',
        })) || [],
    };

    console.log('수정된 콘텐츠', editedContent);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>{data[0]?.mainTitle}</S.Title>
          <S.ProfileContainer>
            {data[0]?.detailMembers?.map(p => (
              <S.ProfileBox key={p.memberId}>
                <S.ProfileImages src={p.image} />
                <h3>{p.name}</h3>
              </S.ProfileBox>
            ))}
          </S.ProfileContainer>
        </S.Header>

        <S.Content>
          {data[0]?.rulePairs?.map((rule, index) => (
            <S.TextContainer key={rule.id}>
              <h3
                contentEditable={editMode}
                suppressContentEditableWarning={editMode}
                ref={el => (titleRefs.current[index] = el)}>
                {rule.ruleTitle}
              </h3>
              <p
                contentEditable={editMode}
                suppressContentEditableWarning={editMode}
                ref={el => (detailRefs.current[index] = el)}>
                {rule.ruleDetail}
              </p>
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
        <S.UpdateBtn onClick={() => setEditMode(true)}>수정하기</S.UpdateBtn>
      )}

      {data?.comments?.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </S.Container>
  );
};

export default MateRuleDetailCheckPage;
