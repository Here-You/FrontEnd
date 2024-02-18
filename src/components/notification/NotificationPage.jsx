import { useNavigate } from 'react-router-dom';

import * as S from './NotificationPage.style';
import Book from '/images/Book_light.svg';
import Comment from '/images/comment_light.svg';
import Heart from '/images/signature/ClickedHeart.svg';

const NotificationPage = ({ notifications }) => {
  const navigate = useNavigate();
  console.log(notifications);

  return (
    <S.Container>
      {notifications?.map(notify =>
        notify?.content?.type === 'SIGNATURE' ? (
          notify?.content?.action === 'LIKE' ? (
            <S.NotificationContainer
              onClick={() => navigate(`/signature/post/${notify?.itemId}`)}>
              <S.Img src={Heart} />
              <S.TextContainer>
                <h3>
                  {notify?.content?.actionUserNickname}님이 회원님의 시그니처
                  <span>{notify?.itemDesc && `(${notify?.itemDesc})`}</span>에
                  좋아요를 남겼습니다.
                </h3>
              </S.TextContainer>
            </S.NotificationContainer>
          ) : (
            <S.NotificationContainer
              onClick={() => navigate(`/signature/post/${notify?.itemId}`)}>
              <S.Img src={Comment} />
              <S.TextContainer>
                <h3>
                  {notify?.content?.actionUserNickname}님이 회원님의 시그니처
                  <span>{notify?.itemDesc && `(${notify?.itemDesc})`}</span>에
                  댓글을 남겼습니다.
                </h3>
              </S.TextContainer>
            </S.NotificationContainer>
          )
        ) : (
          notify?.content?.type === 'RULE' &&
          notify?.content?.action === 'COMMENT' && (
            <S.NotificationContainer
              onClick={() => navigate(`/mate/rule-check/${notify?.itemId}`)}>
              <S.Img src={Comment} />
              <S.TextContainer>
                <h3>
                  {notify?.content?.actionUserNickname}님이 회원님의 규칙
                  <span>{notify?.itemDesc && `(${notify?.itemDesc})`}</span>에
                  댓글을 남겼습니다.
                </h3>
              </S.TextContainer>
            </S.NotificationContainer>
          )
        ),
      )}
    </S.Container>
  );
};

export default NotificationPage;
