import React from 'react';

import * as S from './Notification.style';

const NotificationSkeleton = () => {
  return (
    <S.Container>
      {new Array(15).fill(0).map(() => (
        <React.Fragment>
          <S.NotificationContainer>
            <S.Img />
            <S.Text />
          </S.NotificationContainer>
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default NotificationSkeleton;
