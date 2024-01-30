import { useRef, useState } from 'react';

import * as S from './InputModal.style';
import { myPageEditImg } from '/public/images/mypage';
import { updateIntro } from '@/apis/request/profile';
import { updateNickName } from '@/apis/request/profile';

const InputModalPage = ({ title, buttonText, inputType, onClose }) => {
  const [changeValue, setChangeValue] = useState();

  const outside = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    if (inputType === 'nickname') {
      updateNickName(changeValue);
    } else {
      updateIntro(changeValue);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.ModalOverlay
        ref={outside}
        onClick={e => {
          if (e.target == outside.current) onClose();
        }}>
        <S.ModalContentContainer>
          <S.CloseImg onClick={onClose} src={myPageEditImg.Close} alt="닫기" />
          <h3>{title}</h3>

          <S.ModalInput
            onChange={e => setChangeValue(e.target.value)}
            value={changeValue}
            type="text"
          />
          <S.ModalButton>{buttonText}</S.ModalButton>
        </S.ModalContentContainer>
      </S.ModalOverlay>
    </form>
  );
};
export default InputModalPage;
