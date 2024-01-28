import { useEffect, useRef, useState, axios } from 'react';
import { API_URL } from '@/constants/path';
import { EDIT_MODAL, INPUT_EDIT_MODAL } from '../../../constants/editModal';
import * as S from './EditModalPage.style';
import { myPageEditImg } from '/public/images/mypage';
import editModal from '@/store/editModal';

const EditModalPage = () => {
  const [nick, setNick] = useState();
  const { onClose, isOpen, modalId, modalName } = editModal();
  const [changeValue, setChangeValue] = useState();
  const [modals, setModals] = useState();

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
        const response = await axios.put(API_URL.UPDATE_NICKNAME, { nick });
        console.log('성공', response);
      } else {
        setIntroductions(changeValue);
      }
    } catch (error) {
      console.log('실패', error);
    } finally {
      console.log('데이터 요청 완료');
    }
  };
  return (
    <>
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
    </>
  );
};
export default EditModalPage;
