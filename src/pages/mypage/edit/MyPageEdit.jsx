import React from 'react';

import * as S from './MyPageEdit.style';
import Category from '@/components/mypage/Category';
import MyProfileEdit from '@/components/mypage/edit/MyProfileEdit';

const MyPageEditPage = () => {
  return (
    <S.EditPageWrap>
      <MyProfileEdit />
    </S.EditPageWrap>
  );
};

export default MyPageEditPage;
