import React, { useState } from 'react';

import * as S from './NotificatiionPage.style';
import Book from '/images/Book_light.svg';
import Comment from '/images/comment_light.svg';
import Heart from '/images/signature/NoneClickHeart.svg';
import { useNotification } from '@/hooks/notification/useNotification';

const NotificationPage = () => {
  const { data, loading, error } = useNotification();
  console.log(loading);

  return (
    <S.Container>
      {data?.map(list => {
        return (
          <S.NotificationContainer>
            {list.type === 'LIKE' && <S.Img src={Heart} alt="Heart Icon" />}
            {list.type === 'COMMENT' && (
              <S.Img src={Comment} alt="Comment Icon" />
            )}
            {list.type === 'INVITE' && (
              <S.Img src={Book} alt="Comment Icon" />
            )}
            <p>
              <span>{list.content}</span>
            </p>
          </S.NotificationContainer>
        );
      })}

      
    </S.Container>
  );
};

export default NotificationPage;
