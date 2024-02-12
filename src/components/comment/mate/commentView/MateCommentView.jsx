import { format } from 'date-fns';

import * as S from './MateCommentView.style';
import Pen from '/icons/Pen.svg';
import Trash from '/icons/Trash.svg';
import Logo from '/images/mypage/MyPageLogo.svg';

const MateCommentView = commentData => {
  const { content, id, image, name, updated } = commentData.commentData;
  const formattedDate = format(updated, 'yy.MM.dd');
  console.log(commentData);

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
          <p>{content}</p>
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
