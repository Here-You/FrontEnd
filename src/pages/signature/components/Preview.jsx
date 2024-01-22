import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Preview.style';

//시그니처 글 미리보기
//Data : 유저 프사, 작성 날짜, 미리보기 사진 이미지, 제목, 하트 수

export default function Preview(data) {
  const navigate = useNavigate();

  //이거 나중에 수정하기
  const handleOpenSignature = () => {
    navigate(`/signature/?title=${data.title}`, { state: data });
  };

  return (
    <S.PreviewWrap onClick={handleOpenSignature}>
      <S.Profile>
        <S.ProfileImg src={data.userImgUrl} />
        <S.Date>{data.date}</S.Date>
      </S.Profile>
      <S.PreviewImg src={data.page[0].img} />
      <S.Title>{data.title}</S.Title>
      <S.Open>자세히보기</S.Open>
    </S.PreviewWrap>
  );
}
