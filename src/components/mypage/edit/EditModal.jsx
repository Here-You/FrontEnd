import { useEffect, useRef, useState } from 'react';

import { kakaoLogout } from '../../login/KaKaoLogout';
import * as S from './EditModalPage.style';
import { myPageEditImg } from '/public/images/mypage';
import { updateIntro } from '@/apis/request/profile';
import editModal from '@/store/editModal';

const EditModalPage = () => {
  const [nick, setNick] = useState();
  const { onClose, isOpen, title, buttonText, secondTitle } = editModal();
  const [modals, setModals] = useState();

  const [introductions, setIntroductions] = useState();

  const outside = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    updateIntro(introductions);
  };
  const handleModalButtonClick = () => {
    onClose();
    const accessToken = 'your_access_token_here'; // 여러분이 사용하는 방식에 따라 액세스 토큰을 가져옵니다.

    kakaoLogout(accessToken);

    console.log('로그아웃');
  };
  return (
    <form onSubmit={handleSubmit}>
      {isOpen && (
        <S.ModalOverlay
          ref={outside}
          onClick={e => {
            if (e.target == outside.current) onClose();
          }}>
          <S.ModalContentContainer>
            <S.CloseImg
              onClick={() => onClose()}
              src={myPageEditImg.Close}
              alt="닫기"
            />
            <h3>
              {title}
              <br />
              <p>{secondTitle}</p>
            </h3>

            <S.ButtonContainer>
              <S.SecondButton onClick={() => onClose()}>취소</S.SecondButton>
              <S.SecondButton
                style={{
                  borderLeft: '1px solid #EEEEEE',
                  color: '#ff8686',
                }}
                onClick={handleModalButtonClick}>
                {buttonText}
              </S.SecondButton>
            </S.ButtonContainer>
          </S.ModalContentContainer>
        </S.ModalOverlay>
      )}
    </form>
  );
};
export default EditModalPage;
