import React from 'react';

import * as S from './MyPageEdit.style';
import ModalPortal from '@/components/ModalPortal';
import EditModalPage from '@/components/mypage/edit/EditModal';
import MyProfileEdit from '@/components/mypage/edit/MyProfileEdit';
import InputModalPage from '@/components/mypage/edit/InputModal';

const MyPageEditPage = () => {
  return (
    <>
      <S.EditPageContainer>
        <ModalPortal>
          <EditModalPage />
          <InputModalPage />
        </ModalPortal>
        <S.UserInfo>유저 정보</S.UserInfo>
        <MyProfileEdit />
      </S.EditPageContainer>
    </>
  );
};

export default MyPageEditPage;
