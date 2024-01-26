import { useState } from 'react';

import * as S from './RuleFollowModal.style';
import RuleFollowModalPlus from './RuleFollowModalPlus';

const RuleFollowModal = ({ onClose }) => {
  const [showSearchResult, setShowSearchResult] = useState(false);

  const handleSearchButtonClick = () => {
    setShowSearchResult(true);
  };

  return (
    <S.ModalBase>
      <S.ModalContainer>
        <span>초대할 메이트의 아이디를 입력하세요.</span>
        <S.SearchContainer>
          <S.UserInput />
          <S.SearchButton onClick={handleSearchButtonClick} />
        </S.SearchContainer>

        {showSearchResult && <RuleFollowModalPlus onClose={onClose} />}

        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.OkButton>초대하기</S.OkButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBase>
  );
};

export default RuleFollowModal;
