import { format } from 'date-fns';
import { useMemo } from 'react';

import * as S from './Preview.style';

const Preview = ({ signature }) => {
  const { date, image, title, id } = signature;

  const formattedDate = useMemo(() => {
    return format(date, 'yy/MM/dd');
  }, [date]);

  return (
    <>
      <S.PreviewWrap>
        <S.Profile>
          <S.Date>{formattedDate}</S.Date>
        </S.Profile>
        <S.PreviewImg src={image} />
        <S.Title>{title}</S.Title>
        <S.Open to={`/signature/post/${id}`}>자세히보기</S.Open>
      </S.PreviewWrap>
    </>
  );
};

export default Preview;
