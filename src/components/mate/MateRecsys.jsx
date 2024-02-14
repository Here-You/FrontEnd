import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FollowButton2 from './FollowButton2';
import * as S from './MateRecsys.style';
import Logo from '/images/mypage/MyPageLogo.svg';

const MateRecsys = ({ mate }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const DefaultImg =
    'https://i.pinimg.com/564x/cb/a0/65/cba065ca68bafa4da74df37c0b39d8e8.jpg';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <S.MateBox key={mate._id}>
      <S.MateDescriptionBox>
        <S.TextBox>
          <S.MateImage
            src={imageError || !mate.mateImage ? Logo : mate.mateImage}
            onError={handleImageError}
          />
          <S.TextContainer>
            <S.Name>{mate.mateName}</S.Name>
            <S.Info>{mate.introduction}</S.Info>
          </S.TextContainer>
          <S.ButtonContainer>
            <FollowButton2
              initialFollowState={mate.is_followed}
              id={mate._id}
            />
            <S.Button
              onClick={() => {
                navigate(`/profile/${mate._id}`);
              }}>
              시그니처 보러가기
            </S.Button>
          </S.ButtonContainer>
        </S.TextBox>
      </S.MateDescriptionBox>
    </S.MateBox>
  );
};

export default MateRecsys;
