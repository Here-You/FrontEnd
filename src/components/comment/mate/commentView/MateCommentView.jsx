import { format } from 'date-fns';

import * as S from './MateCommentView.style';
import Pen from '/icons/Pen.svg';
import Trash from '/icons/Trash.svg';

const MateCommentView = commentData => {
  const { id, created, image, text } = commentData.commentData;
  const date = new Date(created);
  const formattedDate = format(date, 'yy.MM.dd');

  return (
    <S.Container>
      <S.Avatar src={image} />
      <S.CommentViewContainer>
        <S.CommentContentContainer>
          <p>이름</p>
          <S.LeftContent>
            <p>{formattedDate}</p>
          </S.LeftContent>
        </S.CommentContentContainer>
        <S.CommentContentContainer>
          <p>{text}</p>
          <S.LeftContent>
            <S.Icon src={Pen} />
            <S.Icon src={Trash} />
          </S.LeftContent>
        </S.CommentContentContainer>
      </S.CommentViewContainer>
    </S.Container>
  );
};

export default MateCommentView;
