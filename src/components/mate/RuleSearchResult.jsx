import { useState } from 'react';

import * as S from './RuleSearchResult.style';

const RuleSearchResult = ({ profileData, onClick }) => {
  const { image, name, nickname, bio } = profileData;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick(profileData, !isActive);
  };

  return (
    <S.ResultContainer isActive={isActive} onClick={handleClick}>
      <S.UserImg src={image} alt="프로필" />
      <S.TextContainer>
        <p>{name}</p>
        <p>{nickname}</p>
        <p>{bio}</p>
      </S.TextContainer>
    </S.ResultContainer>
  );
};

export default RuleSearchResult;
