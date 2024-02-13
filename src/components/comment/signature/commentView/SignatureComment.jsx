import { format } from 'date-fns';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './SignatureComment.style';
import Pen from '/icons/Pen.svg';
import Trash from '/icons/Trash.svg';
import Logo from '/images/mypage/MyPageLogo.svg';
import { postSignatureReComment } from '@/apis/request/signature';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SignatureComment = ({ data }) => {
  const { signatureId } = useParams();

  const queryClient = useQueryClient();
  const { _id, content, parentId, is_edited, writer, date } = data;
  const formattedEndDate = format(date, 'yyyy-MM-dd HH:mm:ss');
  const [editMode, setEditMode] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyComment, setReplyComment] = useState('');
  console.log(replyComment);

  const handleCommentEdit = () => {};
  const handleCommentDelete = () => {};

  const indentationLevel = parentId === _id ? 0 : 1;
  const isParentComment = parentId === _id;

  const handleReplyToggle = () => {
    setIsReplying(!isReplying);
  };

  const { mutateAsync: postReComment } = useMutation({
    mutationFn: postSignatureReComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: error => {
      console.error('답글 작성 실패', error);
    },
  });

  return (
    <S.Container indentationLevel={indentationLevel}>
      <S.Avatar src={writer?.image ? writer?.image : Logo} />
      <S.ContentContainer>
        <S.NameContainer>
          <S.Name>{writer?.name}</S.Name>
          {isParentComment && (
            <S.LeftContent>
              <S.Button onClick={handleReplyToggle}>답글</S.Button>
              <S.Icon src={Pen} onClick={handleCommentEdit} />
              <S.Icon src={Trash} onClick={handleCommentDelete} />
            </S.LeftContent>
          )}
        </S.NameContainer>
        <S.Content>{content}</S.Content>
        <S.ContentInner>
          <S.Content>{formattedEndDate}</S.Content>
          <S.EditContent>{is_edited === true ? '수정됨' : null}</S.EditContent>
        </S.ContentInner>
        {isReplying && (
          <S.ReplyContainer>
            <S.Input
              type="text"
              placeholder="답글을 작성하세요..."
              value={replyComment}
              onChange={e => setReplyComment(e.target.value)}
            />
            <S.Button
              onClick={async () => {
                try {
                  postReComment({
                    signatureId,
                    parentId,
                    content: replyComment,
                  });
                  setReplyComment('');
                } catch (e) {
                  console.log(e);
                }
              }}>
              답글 작성
            </S.Button>
          </S.ReplyContainer>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};

export default SignatureComment;
