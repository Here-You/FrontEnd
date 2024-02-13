import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './SignatureComment.style';
import Pen from '/icons/Pen.svg';
import Trash from '/icons/Trash.svg';
import Logo from '/images/mypage/MyPageLogo.svg';
import {
  deleteSignatureReComment,
  postSignatureReComment,
  updateSignatureReComment,
} from '@/apis/request/signature';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SignatureComment = ({ data }) => {
  const { signatureId } = useParams();
  const queryClient = useQueryClient();
  const { _id, content, parentId, is_edited, writer, date } = data;

  const formattedEndDate = format(date, 'yyyy-MM-dd HH:mm:ss');
  const [editMode, setEditMode] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyComment, setReplyComment] = useState('');
  const editModeRef = useRef(false);
  const editedContentRef = useRef(content);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editModeRef.current) {
      inputRef.current.focus();
    }
  }, [editModeRef.current]);

  const handleContentChange = () => {
    editedContentRef.current = inputRef.current.innerText;
  };

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

  const { mutateAsync: updateReComment } = useMutation({
    mutationFn: updateSignatureReComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: error => {
      console.error('답글 수정 실패', error);
    },
  });

  const { mutateAsync: deleteReComment } = useMutation({
    mutationFn: deleteSignatureReComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: error => {
      console.error('답글 삭제 실패', error);
    },
  });

  return (
    <S.Container indentationLevel={indentationLevel}>
      <S.Avatar src={writer?.image ? writer?.image : Logo} />
      <S.ContentContainer>
        <S.NameContainer>
          <S.Name>{writer?.name}</S.Name>
          {writer?.is_writer === true && (
            <S.LeftContent>
              <S.Button onClick={handleReplyToggle}>답글</S.Button>
              {editMode ? (
                <button
                  onClick={async () => {
                    try {
                      await updateReComment({
                        signatureId,
                        commentId: _id,
                        content: editedContentRef.current,
                      });
                      setEditMode(false);
                    } catch (e) {
                      console.error(e);
                    }
                  }}>
                  수정 완료
                </button>
              ) : (
                <S.Icon
                  src={Pen}
                  onClick={() => {
                    setEditMode(true);
                  }}
                />
              )}
              <S.Icon
                src={Trash}
                onClick={async () => {
                  try {
                    await deleteReComment({ signatureId, commentId: _id });
                  } catch (e) {
                    console.error(e);
                  }
                }}
              />
            </S.LeftContent>
          )}
        </S.NameContainer>
        <S.Content
          contentEditable={editMode}
          suppressContentEditableWarning={editMode}
          ref={inputRef}
          onInput={handleContentChange}>
          {content}
        </S.Content>
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
