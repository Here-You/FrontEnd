import { useEffect, useRef, useState } from 'react';
import { myPageEditImg } from '/public/images/mypage';
import * as S from './EditModalPage.style';
import { getProfileInfo } from '@/apis/request/profile';
import editModal from '@/store/editModal';

const EditModalPage = ({ nickname, introduction }) => {
  const [info, setInfo] = useState();
  const [nick, setNick] = useState(nickname);

  const [introductions, setIntroductions] = useState(introduction);
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
  const { onClose, modalNum, isOpen } = editModal();
  const handleInputChange = event => {
    if (Modals[modalNum].id === 0) {
      setNick(event.target.value);
    } else {
      setIntroductions(event.target.value);
    }
  };
  const outside = useRef();
  const Modals = [
    {
      id: 0,
      title: '변경할 닉네임을 입력해 주세요',
      button_text: '닉네임 변경',
      input_value: nick,
    },
    {
      id: 1,
      title: '변경할 프로필 소개 내용을 입력해 주세요.',
      button_text: '프로필 소개 변경',
      input_value: introductions,
    },
    {
      id: 2,
      title: '여행의 이유 회원탈퇴',
      title2: '정말 탈퇴하시겠어요? ㅠㅠ',
      button_text: '회원탈퇴',
    },
    {
      id: 3,
      title: '여행의 이유 로그아웃',
      title2: '로그아웃 하시겠습니까?',
      button_text: '로그아웃',
    },
  ];
  const handleButtonClick = () => {
    onClose();
  };
  return (
    <>
      {isOpen && (
        <S.ModalOverlay
          ref={outside}
          onClick={e => {
            if (e.target == outside.current) onClose();
          }}>
          <S.ModalContentContainer >
            <S.CloseImg
              onClick={() => onClose()}
              src={myPageEditImg.Close}
              alt="닫기"
            />
            <h3>
              {Modals[modalNum].title}
              <br />
              <p>{Modals[modalNum].title2}</p>
            </h3>
            {Modals[modalNum].id < 2 ? (
              <>
                <S.ModalInput
                  onChange={handleInputChange}
                  type="text"
                  defaultValue={
                    Modals[modalNum].id === 0 ? nick : introductions
                  }></S.ModalInput>
                <S.ModalButton onClick={handleButtonClick}>
                  {Modals[modalNum].button_text}
                </S.ModalButton>
              </>
            ) : (
              <>
                <S.ButtonContainer>
                  <S.SecondButton onClick={() => onClose()}>
                    취소
                  </S.SecondButton>
                  <S.SecondButton
                    style={{
                      borderLeft: '1px solid #EEEEEE',
                      color: '#ff8686',
                    }}
                    onClick={handleButtonClick}>
                    {Modals[modalNum].button_text}
                  </S.SecondButton>
                </S.ButtonContainer>
              </>
            )}
          </S.ModalContentContainer>
        </S.ModalOverlay>
      )}
    </>
  );
};
export default EditModalPage;
