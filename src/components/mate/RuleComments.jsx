import * as S from './RuleComments.style';

const RuleComments = (userImage, commentsData) => {
  const handleSubmitForm = e => {
    e.preventDefault();
  };

  const commentsArray = Object.values(commentsData);

  return (
    <S.UnderContainer>
      <S.LookContainer>
        <S.CommentsWrapper>
          {commentsArray.map(comment => (
            <div key={comment._id}>
              <S.CommentUserImg src={comment.image} />
              <S.CommentText>{comment.comment_text}</S.CommentText>
            </div>
          ))}
        </S.CommentsWrapper>
      </S.LookContainer>

      <S.InputContainer>
        {userImage && <S.UserImg src={userImage.image} />}
        <S.InputWrapper onSubmit={handleSubmitForm}>
          <S.InputText placeholder="댓글을 달아보세요!" maxLength="200" />
          <S.SubmitButton type="submit" />
        </S.InputWrapper>
      </S.InputContainer>
    </S.UnderContainer>
  );
};

export default RuleComments;
