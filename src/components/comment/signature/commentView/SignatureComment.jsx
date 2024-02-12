import { format } from 'date-fns';

import * as S from './SignatureComment.style';
import Pen from '/icons/Pen.svg';
import Trash from '/icons/Trash.svg';

const SignatureComment = ({ data }) => {
  const { _id, content, parentId, is_edited, writer, date } = data;
  const formattedEndDate = format(date, 'yyyy-MM-dd HH:mm:ss');

  const handleCommentEdit = () => {};
  const handleCommentDelete = () => {};

  const indentationLevel = parentId === _id ? 0 : 1;

  return (
    <S.Container indentationLevel={indentationLevel}>
      <S.Avatar src={writer?.image} />
      <S.ContentContainer>
        <S.NameContainer>
          <S.Name>{writer?.name}</S.Name>
          <S.LeftContent>
            <S.Icon src={Pen} onClick={handleCommentEdit} />
            <S.Icon src={Trash} onClick={handleCommentDelete} />
          </S.LeftContent>
        </S.NameContainer>
        <S.ContentInner>
          <S.Content>{content}</S.Content>
          <h3>{!is_edited === true ? '수정됨' : null}</h3>
        </S.ContentInner>
        <S.Content>{formattedEndDate}</S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};

export default SignatureComment;
