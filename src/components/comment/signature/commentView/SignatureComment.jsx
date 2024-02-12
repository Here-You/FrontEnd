import { format } from 'date-fns';

import * as S from './SignatureComment.style';
import Pen from '/icons/Pen.svg';
import Trash from '/icons/Trash.svg';

const SignatureComment = ({ data }) => {
  const { id, text, created, image, name } = data;
  const newDate = new Date(created);
  const formattedEndDate = format(newDate, 'yyyy-MM-dd HH:mm:ss');

  const handleComemntEdit = () => {};

  const handleCommentDelete = () => {};

  return (
    <S.Container>
      <S.Avatar src={image} />
      <S.ConentContainer>
        <S.NameContainer>
          <S.Name>{name}</S.Name>
          <S.LeftContent>
            <S.Icon src={Pen} onClick={handleComemntEdit} />
            <S.Icon src={Trash} onClick={handleCommentDelete} />
          </S.LeftContent>
        </S.NameContainer>
        <S.Content>{text}</S.Content>
        <S.Content>{formattedEndDate}</S.Content>
      </S.ConentContainer>
    </S.Container>
  );
};

export default SignatureComment;
