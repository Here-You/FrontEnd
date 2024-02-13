import React from 'react';

import * as S from './NotificationPage.style';
import Book from '/images/Book_light.svg';
import Bell from '/images/bell3D.svg';
import Comment from '/images/comment_light.svg';
import Heart from '/images/signature/NoneClickHeart.svg';
import { useNotification } from '@/hooks/notification/useNotification';

const NotificationPage = () => {
  const { data, loading, error } = useNotification();

  return (
    <S.Container>
      {data?.length ? (
        data.map(list => (
          <S.NotificationContainer key={list.id}>
            {list.type === 'LIKE' && <S.Img src={Heart} alt="Heart Icon" />}
            {list.type === 'COMMENT' && (
              <S.Img src={Comment} alt="Comment Icon" />
            )}
            {list.type === 'INVITE' && <S.Img src={Book} alt="Comment Icon" />}
            <p>
              <span>{list.content}</span>
            </p>
          </S.NotificationContainer>
        ))
      ) : (
        <S.BellContainer>
          <S.Bell src={Bell} />
          <S.Text>새로운 알림이 없습니다</S.Text>
        </S.BellContainer>
      )}
    </S.Container>
  );
};

export default NotificationPage;
