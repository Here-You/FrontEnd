import { formatDistance } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
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
import { ko } from 'date-fns/locale';

const SignatureComment = ({ data }) => {
  const { signatureId } = useParams();
  const queryClient = useQueryClient();
  const { _id, content, parentId, is_edited, writer, date, can_delete } = data;

  const currentTime = new Date();
  const timeAgo = formatDistance(date, currentTime, {
    addSuffix: true,
    locale: ko,
  });

  const [editMode, setEditMode] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyComment, setReplyComment] = useState('');
  const editModeRef = useRef(false);
  const editedContentRef = useRef(content);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const handleContentChange = () => {
    editedContentRef.current = inputRef.current.innerText;
  };

  const indentationLevel = parentId === _id ? 0 : 1;
  const isParentComment = parentId === _id;

  const { mutateAsync: postReComment } = useMutation({
    mutationFn: postSignatureReComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: () => {
      toast.error('답글 작성을 실패하였습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('답글 작성 완료');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  const { mutateAsync: updateReComment } = useMutation({
    mutationFn: updateSignatureReComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: () => {
      toast.error('답글 수정을 실패하였습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('답글 수정 완료');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  const { mutateAsync: deleteReComment } = useMutation({
    mutationFn: deleteSignatureReComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: () => {
      toast.error('삭제를 실패하였습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('삭제 완료');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  return (
    <S.Container indentationLevel={indentationLevel}>
      <S.Avatar src={writer?.image ? writer?.image : Logo} />
      <S.ContentContainer>
        <S.NameContainer>
          <S.Name>{writer?.name}</S.Name>
          {(can_delete || writer?.is_writer) && (
            <S.LeftContent>
              {!editMode && (
                <S.Button onClick={() => setIsReplying(true)}>답글</S.Button>
              )}
              {isReplying === true && (
                <S.Button onClick={() => setIsReplying(false)}>취소</S.Button>
              )}
              {editMode ? (
                <>
                  <S.Button
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
                  </S.Button>
                  <S.Button onClick={() => setEditMode(false)}>취소</S.Button>
                </>
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
          <S.Content>{timeAgo}</S.Content>
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
                  setIsReplying(false);
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
