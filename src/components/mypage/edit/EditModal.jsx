import { useEffect, useRef, useState } from 'react';

import { EDIT_MODAL, INPUT_EDIT_MODAL } from '../../../constants/editModal';
import * as S from './EditModalPage.style';
import { myPageEditImg } from '/public/images/mypage';
import { getProfileInfo } from '@/apis/request/profile';
import editModal from '@/store/editModal';
import imageStore from '@/store/imageStore';

const EditModalPage = () => {
  const [info, setInfo] = useState();
  const [nick, setNick] = useState();
  const { onClose, isOpen, modalId, modalName } = editModal();
  const [changeValue, setChangeValue] = useState();
  const [modals, setModals] = useState();
  const { setUploadImgUrl } = imageStore();
  const [changeImg, setChangeImg] = useState();

  const [introductions, setIntroductions] = useState();
  const getInfo = async () => {
    try {
      const res = await getProfileInfo();
      const members = res.data;
      setInfo(members);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getInfo();
    setModals(modalName === 'EDIT_MODAL' ? EDIT_MODAL : INPUT_EDIT_MODAL);
  }, [modalName]);

  const handleInputChange = event => {
    setChangeValue(event.target.value);
  };
  const outside = useRef();

  const handleButtonClick = () => {
    if (modals === INPUT_EDIT_MODAL) {
      if (INPUT_EDIT_MODAL[modalId].id === 0) {
        setNick(changeValue);
      } else if (INPUT_EDIT_MODAL[modalId].id === 2) {
        setUploadImgUrl(changeImg);
      } else {
        setIntroductions(changeValue);
      }
      onClose();
    } else {
      onClose();
    }
  };

  const onchangeImageUpload = e => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setChangeImg(reader.result);
    };
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
                {modals[modalId].id === 2 ? (
                  <>
                    <div>
                      <label for="file">
                        <S.UpLoadButton>사진 가져오기</S.UpLoadButton>
                      </label>
                      {changeImg && <img src={changeImg} alt="Selected" />}
                    </div>
                    <S.ImageInput
                      type="file"
                      accept="image/*"
                      id="file"
                      onChange={onchangeImageUpload}
                    />
                  </>
                ) : (
                  <S.ModalInput
                    onChange={handleInputChange}
                    type="text"
                    defaultValue={
                      modals[modalId].id === 0 ? nick : introductions
                    }></S.ModalInput>
                )}

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
