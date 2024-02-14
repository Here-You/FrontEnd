import React from 'react';

import * as S from './MyPageEdit.style';
import MyProfileEdit from '@/components/mypage/edit/MyProfileEdit';
import { useGetNotification } from '@/hooks/notification/useGetNotification';

const MyPageEditPage = () => {
  return (
    <S.EditPageContainer>
      <S.UserInfo>유저 정보</S.UserInfo>
      <MyProfileEdit />
    </S.EditPageContainer>
  );
};

export default MyPageEditPage;
