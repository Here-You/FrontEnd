import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import * as S from './MateCommentView.style';
import Pen from '/icons/Pen.svg';
import Trash from '/icons/Trash.svg';
import Logo from '/images/mypage/MyPageLogo.svg';
import {
  deleteMateRuleComment,
  updateMateRuleComment,
} from '@/apis/request/mate';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const MateCommentView = ({ commentData }) => {
  const { content, id, image, name, updated } = commentData;
  const formattedDate = format(updated, 'yy.MM.dd');
  const [editMode, setEditMode] = useState(false);
  const { ruleId } = useParams();
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

  const queryClient = useQueryClient();
  const { mutateAsync: deleteComment } = useMutation({
    mutationFn: deleteMateRuleComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    },
    onError: () => {
      toast.error('댓글 삭제을 실패하였습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('댓글 삭제 완료');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  const { mutateAsync: updateComment } = useMutation({
    mutationFn: updateMateRuleComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    },
    onError: () => {
      toast.error('댓글이 수정되지 않았습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('댓글 수정 완료');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  return (
    <S.Container>
      <S.Avatar src={image ? image : Logo} />
      <S.CommentViewContainer>
        <S.CommentContentContainer>
          <p>{name}</p>
          <S.LeftContent>
            <p>{formattedDate}</p>
          </S.LeftContent>
        </S.CommentContentContainer>
        <S.CommentContentContainer>
          <p
            contentEditable={editMode}
            suppressContentEditableWarning={editMode}
            ref={inputRef}
            onInput={handleContentChange}>
            {content}
          </p>
          <S.LeftContent>
            {editMode ? (
              <S.UpdateButton
                onClick={async () => {
                  try {
                    await updateComment({
                      ruleId,
                      id,
                      content: editedContentRef.current,
                    });
                    setEditMode(false);
                  } catch (e) {
                    console.error(e);
                  }
                }}>
                수정완료
              </S.UpdateButton>
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
                  await deleteComment({ ruleId, id });
                } catch (e) {
                  console.error(e);
                }
              }}
            />
          </S.LeftContent>
        </S.CommentContentContainer>
      </S.CommentViewContainer>
    </S.Container>
  );
};

export default MateCommentView;
