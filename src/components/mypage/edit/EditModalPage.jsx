import { useEffect, useState } from 'react';

import { myPageEditImg } from '../../../../public/images/mypage/index';
import * as S from './EditModalPage.style';
import { getProfileInfo } from '@/apis/request/profile';
import editModal from '@/store/editModal';

const EditModalPage = ({ nickname, introduction }) => {
  const [info, setInfo] = useState();
  const [editedValue, setEditedValue] = useState('');
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
  const { onClose, modalNum } = editModal();
  const handleInputChange = event => {
    setEditedValue(event.target.value);
  };
  const Modals = [
    {
      id: 0,
      title: '변경할 닉네임을 입력해 주세요',
      button_text: '닉네임 변경',
      input_value: nickname,
    },
    {
      id: 1,
      title: '변경할 프로필 소개 내용을 입력해 주세요.',
      button_text: '프로필 소개 변경',
      input_value: introduction,
    },
    {
      id: 2,
      title: '여행의 이유 회원탈퇴 정말 탈퇴하시겠어요? ㅠㅠ',
      button_text: '회원탈퇴',
    },
  ];
  const handleButtonClick = async () => {
    try {
      if (modalNum === 0) {
        await getProfileInfo({ nickname: editedValue });
      } else if (modalNum === 1) {
        await getProfileInfo({ introduction: editedValue });
      }
      getInfo(); 
      onClose(); 
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <S.ModalOverlay>
        <S.ModalContent>
          <S.CloseImg
            onClick={() => onClose()}
            src={myPageEditImg.Close}
            alt="닫기"
          />
          <S.ModalTitle>{Modals[modalNum].title}</S.ModalTitle>
          <S.ModalInput
            onChange={handleInputChange}
            type="text"
            placeholder={Modals[modalNum].input_value}
            ></S.ModalInput>
          <S.ModalButton onClick={handleButtonClick}>
            {Modals[modalNum].button_text}
          </S.ModalButton>
        </S.ModalContent>
      </S.ModalOverlay>
    </>
  );
};
export default EditModalPage;
