import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './NotificationPage.style';
import Book from '/images/Book_light.svg';
import Comment from '/images/comment_light.svg';
import Heart from '/images/signature/ClickedHeart.svg';

const NotificationPage = ({ notification }) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      {notification?.map(list => (
        <React.Fragment key={list.id}>
          {list.type === 'LIKE' && (
            <S.NotificationContainer
              onClick={() => navigate(`/signature/post/${list.itemId}`)}>
              <S.Img src={Heart} alt="Heart Icon" />
              <span>{list.content}</span>
            </S.NotificationContainer>
          )}
          {list.type === 'COMMENT' && (
            <S.NotificationContainer>
              <S.Img src={Comment} alt="Comment Icon" />
              <span>{list.content}</span>
            </S.NotificationContainer>
          )}
          {list.type === 'INVITE' && (
            <S.NotificationContainer>
              <S.Img src={Book} alt="Comment Icon" />
              <span>{list.content}</span>
            </S.NotificationContainer>
          )}
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default NotificationPage;
