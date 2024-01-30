import { useRef, useState } from 'react';

import { kakaoLogout } from '../login/KaKaoLogout';
import * as S from './Modal.style';
import { myPageEditImg } from '/public/images/mypage';
import { updateIntro } from '@/apis/request/profile';
import { updateNickName } from '@/apis/request/profile';

const EditModalPage = ({
  title,
  buttonText,
  secondButtonText,
  inputType,
  squareDoubleButton,
  roundDoubleButton,
  secondTitle,
  thirdTitle,
  onClose,
  firstButtonImg,
  secondButtonImg,
  bigModal,
}) => {
  const outside = useRef();

  const [changeValue, setChangeValue] = useState();

  const handleUpdate = e => {
    if (inputType === 'nickname') {
      updateNickName(changeValue);
    } else if (inputType === 'intro') {
      updateIntro(changeValue);
    } else if (inputType === 'travel_title') {
    }
    onClose();
  };
  const handleModalButtonClick = () => {
    onClose();
    const accessToken = 'your_access_token_here';

    kakaoLogout(accessToken);

    console.log('로그아웃');
  };
  return (
    <>
      <S.ModalOverlay
        ref={outside}
        onClick={e => {
          if (e.target == outside.current) onClose();
        }}>
        {bigModal ? (
          <S.BigModalContentContainer>
            <S.CloseImg
              onClick={onClose}
              src={myPageEditImg.Close}
              alt="닫기"
            />
            <h3>
              {title}
              <br />
            </h3>
            {inputType && (
              <S.ModalInput
                onChange={e => setChangeValue(e.target.value)}
                value={changeValue}
                type="text"
              />
            )}
            <h3>{secondTitle}</h3>
            <button>여기 컴포넌트</button>
            <h3>{thirdTitle}</h3>
            <button>여기 컴포넌트</button>
            {squareDoubleButton && (
              <S.ButtonContainer>
                <S.SquareDoubleButton onClick={() => onClose()}>
                  취소
                </S.SquareDoubleButton>
                <S.SquareDoubleButton
                  style={{
                    borderLeft: '1px solid #EEEEEE',
                    color: '#ff8686',
                  }}
                  onClick={handleUpdate}>
                  {buttonText}
                </S.SquareDoubleButton>
              </S.ButtonContainer>
            )}
            {roundDoubleButton && (
              <S.ButtonContainer>
                <S.RoundDoubleButton onClick={() => onClose()}>
                  <img src={firstButtonImg} alt={buttonText} />
                  {buttonText}
                </S.RoundDoubleButton>

                <S.RoundDoubleButton onClick={handleUpdate}>
                  <img src={secondButtonImg} alt={secondButtonText} />
                  {secondButtonText}
                </S.RoundDoubleButton>
              </S.ButtonContainer>
            )}

            {!squareDoubleButton && !roundDoubleButton && (
              <S.ModalButton onClick={handleModalButtonClick}>
                {buttonText}
              </S.ModalButton>
            )}
          </S.BigModalContentContainer>
        ) : (
          <S.ModalContentContainer
            style={{
              height: bigModal && '340px',
            }}>
            <S.CloseImg
              onClick={onClose}
              src={myPageEditImg.Close}
              alt="닫기"
            />
            <h3>
              {title}
              <br />
              <p>{secondTitle}</p>
            </h3>
            {inputType && (
              <S.ModalInput
                onChange={e => setChangeValue(e.target.value)}
                value={changeValue}
                type="text"
              />
            )}

            {squareDoubleButton && (
              <S.ButtonContainer>
                <S.SquareDoubleButton onClick={() => onClose()}>
                  취소
                </S.SquareDoubleButton>
                <S.SquareDoubleButton
                  style={{
                    borderLeft: '1px solid #EEEEEE',
                    color: '#ff8686',
                  }}
                  onClick={handleUpdate}>
                  {buttonText}
                </S.SquareDoubleButton>
              </S.ButtonContainer>
            )}
            {roundDoubleButton && (
              <S.ButtonContainer>
                <S.RoundDoubleButton onClick={() => onClose()}>
                  <img src={firstButtonImg} alt={buttonText} />
                  {buttonText}
                </S.RoundDoubleButton>

                <S.RoundDoubleButton onClick={handleUpdate}>
                  <img src={secondButtonImg} alt={secondButtonText} />
                  {secondButtonText}
                </S.RoundDoubleButton>
              </S.ButtonContainer>
            )}

            {!squareDoubleButton && !roundDoubleButton && (
              <S.ModalButton onClick={handleModalButtonClick}>
                {buttonText}
              </S.ModalButton>
            )}
          </S.ModalContentContainer>
        )}
      </S.ModalOverlay>
    </>
  );
};
export default EditModalPage;
