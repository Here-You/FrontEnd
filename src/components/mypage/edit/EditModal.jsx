import { axios, useEffect, useRef, useState } from 'react';

import { EDIT_MODAL, INPUT_EDIT_MODAL } from '../../../constants/editModal';
import * as S from './EditModalPage.style';
import { myPageEditImg } from '/public/images/mypage';
import { useUpdateIntro } from '@/hooks/profile/useUpdateIntro';
import { useUpdateNickName } from '@/hooks/profile/useUpdateNicknameQuery';
import editModal from '@/store/editModal';
import { useMutation, useQuery } from '@tanstack/react-query';

const EditModalPage = () => {
  const [nick, setNick] = useState();
  const { onClose, isOpen, modalId, modalName } = editModal();
  const [changeValue, setChangeValue] = useState();
  const [modals, setModals] = useState();

  const { mutate, isError } = useMutation({ mutationFn: useUpdateNickName });
  const { mutate: mutateIntro, isError: isErrorPassword } = useMutation({
    mutationFn: useUpdateIntro,
  });
  const [introductions, setIntroductions] = useState();

  useEffect(() => {
    setModals(modalName === 'EDIT_MODAL' ? EDIT_MODAL : INPUT_EDIT_MODAL);
  }, [modalName]);

  const handleInputChange = event => {
    if (EDIT_MODAL[modalId].id === 0) {
      setChangeValue(event.target.value);
    } else {
      setChangeValue(event.target.value);
    }
  };
  const outside = useRef();

  const handleButtonClick = async () => {
    onClose();

    try {
      if (EDIT_MODAL[modalId].id === 0) {
        setNick(changeValue);
        mutate({ nickname: changeValue });
        console.log('성공');
      } else {
        setIntroductions(changeValue);
        mutateIntro(changeValue);
      }
    } catch (error) {
      console.log('실패', error);
    } finally {
      console.log('데이터 요청 완료');
    }
  };
  return (
    <form>
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
              {modals[modalId].title}
              <br />
              <p>{modals[modalId].title2}</p>
            </h3>
            {modals !== EDIT_MODAL ? (
              <>
                <S.ModalInput
                  onChange={handleInputChange}
                  type="text"
                  defaultValue={
                    modals[modalId].id === 0 ? nick : introductions
                  }></S.ModalInput>
                <S.ModalButton onClick={handleButtonClick}>
                  {modals[modalId].button_text}
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
                    {modals[modalId].button_text}
                  </S.SecondButton>
                </S.ButtonContainer>
              </>
            )}
          </S.ModalContentContainer>
        </S.ModalOverlay>
      )}
    </form>
  );
};
export default EditModalPage;
