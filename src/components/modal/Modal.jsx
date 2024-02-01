import { useCallback, useEffect, useState } from 'react';

import * as S from './Modal.style';

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  body,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(!isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <S.Container>
      <S.ModalLayout>
        <S.ModalContainer $showModal={showModal}>
          <S.ContentContainer>
            <S.CloseContainer>
              <S.CloseButton onClick={handleClose}>X</S.CloseButton>
            </S.CloseContainer>
            <S.BodyLayout>{body}</S.BodyLayout>
            <S.ButtonContainer>
              {secondaryActionLabel && (
                <S.Button disabled={disabled} onClick={handleSecondaryAction}>
                  {secondaryActionLabel}
                </S.Button>
              )}
              <S.Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}>
                {actionLabel}
              </S.Button>
            </S.ButtonContainer>
          </S.ContentContainer>
        </S.ModalContainer>
      </S.ModalLayout>
    </S.Container>
  );
};

export default Modal;
