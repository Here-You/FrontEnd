import { useEffect, useState } from 'react';

import { myPageEditImg } from '/public/images/mypage/index';
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
      <S.EditContainer>
        <S.EditContentContainer>
          <p>닉네임</p>
          <p>{info.nickname}</p>
        </S.EditContentContainer>
        <S.EditContentContainer>
          <p>이메일</p>
          <p>{info.email}</p>
        </S.EditContentContainer>
        <S.EditContentContainer style={{ border: 'none' }}>
          <p>프로필 소개</p>
          <p>{info.introduction}</p>
        </S.EditContentContainer>
      </S.EditContainer>
      <S.EditContainer >
        <S.EditContentContainer  onClick={() => onOpen(0)}>
          <p>닉네임 수정</p>
          <S.ArrowImg src={myPageEditImg.RigthArrow} />
        </S.EditContentContainer>
        <S.EditContentContainer onClick={() => onOpen(1)}>
          <p>프로필 소개 수정</p>
          <S.ArrowImg src={myPageEditImg.RigthArrow} />
        </S.EditContentContainer >
        <S.EditContentContainer onClick={() => onOpen(2)} style={{ border: 'none' }}>
          <p>여행의 이유 회원 탈퇴</p>
          <S.ArrowImg src={myPageEditImg.RigthArrow} />
        </S.EditContentContainer>
      </S.EditContainer>
    </>
  );
};
export default MyProfileEdit;
