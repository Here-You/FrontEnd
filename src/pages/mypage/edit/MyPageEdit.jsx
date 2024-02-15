import React from 'react';
import { Toaster } from 'react-hot-toast';

import * as S from './MyPageEdit.style';
import MyProfileEdit from '@/components/mypage/edit/MyProfileEdit';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import TokenErrorPage from '@/pages/signature/TokenErrorPage';
import useAuth from '@/store/useAuth';

const MyPageEditPage = () => {
  const { isLogin } = useAuth();
  if (!isLogin) {
    return <TokenErrorPage />;
  }

  return (
    <S.EditPageContainer>
      <Toaster />
      <S.UserInfo>유저 정보</S.UserInfo>
      <MyProfileEdit />
    </S.EditPageContainer>
  );
};

export default MyPageEditPage;
