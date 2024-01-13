import { useEffect, useState } from 'react';

import { myPageEditImg } from '../../../../public/images/mypage/index';
import EditModalPage from './EditModalPage';
import * as S from './MyProfileEdit.style';
import { getProfileInfo } from '@/apis/request/profile';
import editModal from '@/store/editModal';

const MyProfileEdit = () => {
  const [info, setInfo] = useState([]);
  const { onOpen } = editModal();
  const getInfo = async () => {
    try {
      const res = await getProfileInfo();
      const members = res.data;
      setInfo(members);
      console.log(info);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
    <EditModalPage nickname={info.nickname} introduction={info.introduction}/>
      <S.EditBox>
        <S.EditContentWrap>
          <S.EditContent>닉네임</S.EditContent>
          <S.EditContent>{info.nickname}</S.EditContent>
        </S.EditContentWrap>
        <S.EditContentWrap>
          <S.EditContent>이메일</S.EditContent>
          <S.EditContent>{info.email}</S.EditContent>
        </S.EditContentWrap>
        <S.EditContentWrap style={{ border: 'none' }}>
          <S.EditContent>프로필 소개</S.EditContent>
          <S.EditContent>{info.introduction}</S.EditContent>
        </S.EditContentWrap>
      </S.EditBox>
      <S.EditBox >
        <S.EditContentWrap  onClick={() => onOpen(0)}>
          <S.EditContent>닉네임 수정</S.EditContent>
          <S.ArrowImg src={myPageEditImg.RigthArrow} />
        </S.EditContentWrap>
        <S.EditContentWrap onClick={() => onOpen(1)}>
          <S.EditContent>프로필 소개 수정</S.EditContent>
          <S.ArrowImg src={myPageEditImg.RigthArrow} />
        </S.EditContentWrap >
        <S.EditContentWrap onClick={() => onOpen(2)} style={{ border: 'none' }}>
          <S.EditContent>여행의 이유 회원 탈퇴</S.EditContent>
          <S.ArrowImg src={myPageEditImg.RigthArrow} />
        </S.EditContentWrap>
      </S.EditBox>
    </>
  );
};
export default MyProfileEdit;
