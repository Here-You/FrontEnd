import { format } from 'date-fns';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Preview.style';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Preview = ({ signature }) => {
  const { date, image, title, _id } = signature;
  const navigate = useNavigate();

  const formattedDate = useMemo(() => {
    return format(date, 'yy년 MM월 dd일');
  }, [date]);

  return (
    <S.PreviewWrap onClick={() => navigate(`/signature/post/${_id}`)}>
      <S.DateWrapper>
        <S.Date>{formattedDate}</S.Date>
      </S.DateWrapper>
      <S.PreviewImg
        src={image}
        height={'fit-content'}
        effect="blur"
        width="150"
      />
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.Open to={`/signature/post/${_id}`}>자세히보기</S.Open>
      </S.ContentContainer>
    </S.PreviewWrap>
  );
};

export default Preview;
