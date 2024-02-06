import * as S from './Comment.style';
import { formatDate } from '@/utils/date';

const Comment = ({ comment }) => {
  return (
    <S.CommentContainer>
      <S.CommentBox>
        <S.ProfileImages src={comment.image} />
        <S.TextBox>
          <S.TopText>
            <div>이름 API가 필요해요!</div>
            <date>{formatDate(comment.created)}</date>
          </S.TopText>
          <S.BottomText>
            <h3>{comment.text}</h3>
          </S.BottomText>
        </S.TextBox>
      </S.CommentBox>
    </S.CommentContainer>
  );
};

export default Comment;
