import React from 'react';

import * as S from './MyPageEdit.style';
import ModalPortal from '@/components/ModalPortal';
import MyProfileEdit from '@/components/mypage/edit/MyProfileEdit';
import IntroModal from '@/components/mypage/modal/IntroModal';
import NickNameModal from '@/components/mypage/modal/NickNameModal';
import WithdrawalModal from '@/components/mypage/modal/WithdrawalModal';

const MyPageEditPage = () => {
  return (
    <>
      <S.EditPageContainer>
        <ModalPortal>
          <WithdrawalModal />
          <IntroModal />
          <NickNameModal />
        </ModalPortal>
        <S.UserInfo>유저 정보</S.UserInfo>
        <MyProfileEdit />
      </S.EditPageContainer>
    </>
  );
};

export default MyPageEditPage;
