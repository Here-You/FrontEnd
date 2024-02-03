import React, { useState } from 'react';

import * as S from './NotificatiionPage.style';
import Book from '/images/Book_light.svg';
import Comment from '/images/comment_light.svg';
import Heart from '/images/signature/NoneClickHeart.svg';

const NotificationPage = () => {
  return (
    <S.Container>
      <S.NotificationContainer>
        <S.Img src={Heart}></S.Img>
        <p>
          <span> 상추부자, 이녕12 외 00명 </span>님이 내[시그니처 제목]에 좋아요
        </p>

        <p></p>
      </S.NotificationContainer>
      <S.NotificationContainer>
        <S.Img src={Comment}></S.Img>
        <p>
          <span>상추부자, 이녕12</span>님이 내[규칙 제목]에 댓글
        </p>
      </S.NotificationContainer>
      <S.NotificationContainer>
        <S.Img src={Book}></S.Img>
        <p>
          <span> 상추부자</span>님이 [이번 여행 규칙!!]페이지에 초대하셨습니다.
        </p>
      </S.NotificationContainer>
    </S.Container>
  );
};

export default NotificationPage;
