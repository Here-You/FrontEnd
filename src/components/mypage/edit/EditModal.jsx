import { useEffect, useRef, useState } from 'react';
import EDIT_MODALS from '../../../constants/editModal';
import * as S from './EditModalPage.style';
import { myPageEditImg } from '/public/images/mypage';
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
    if (EDIT_MODALS[modalNum].id === 0) {
      setNick(event.target.value);
    } else {
      setIntroductions(event.target.value);
    }
  };
  const outside = useRef();

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
          <S.ModalContentContainer>
            <S.CloseImg
              onClick={() => onClose()}
              src={myPageEditImg.Close}
              alt="닫기"
            />
            <h3>
              {EDIT_MODALS[modalNum].title}
              <br />
              <p>{EDIT_MODALS[modalNum].title2}</p>
            </h3>
            {EDIT_MODALS[modalNum].id < 2 ? (
              <>
                <S.ModalInput
                  onChange={handleInputChange}
                  type="text"
                  defaultValue={
                    EDIT_MODALS[modalNum].id === 0 ? nick : introductions
                  }></S.ModalInput>
                <S.ModalButton onClick={handleButtonClick}>
                  {EDIT_MODALS[modalNum].button_text}
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
                    {EDIT_MODALS[modalNum].button_text}
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
