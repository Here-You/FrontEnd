import React from 'react';
import { Toaster } from 'react-hot-toast';

import * as S from './MyPageEdit.style';
import MyProfileEdit from '@/components/mypage/edit/MyProfileEdit';

const MyPageEditPage = () => {
  return (
    <S.EditPageContainer>
      <Toaster />
      <S.UserInfo>유저 정보</S.UserInfo>
      <MyProfileEdit />
    </S.EditPageContainer>
  );
};

export default MyPageEditPage;
