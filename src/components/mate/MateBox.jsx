import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FollowButton from './FollowButton';
import * as S from './MateBox.style';
import Logo from '/images/mypage/MyPageLogo.svg';

const MateBox = ({ mate }) => {
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
        <S.MateImage
          src={imageError || !mate.mateImage ? Logo : mate.mateImage}
          onError={handleImageError}
        />
        <S.TextBox>
          <S.TextContainer>
            <h1>{mate.mateName}</h1>
            <p>{mate.introduction}</p>
          </S.TextContainer>
          <FollowButton initialFollowState={mate.is_followed} id={mate._id} />
        </S.TextBox>
      </S.MateDescriptionBox>
      <S.ImageWrapper>
        {mate?.signatures?.length > 0 ? (
          mate.signatures.map(signature => (
            <S.SignatureContainer key={signature._id}>
              <S.SignatureImage
                onClick={() => navigate(`/signature/post/${signature._id}`)}
                src={signature.image}
                onError={handleImageError}
              />
              <p>{signature.title}</p>
            </S.SignatureContainer>
          ))
        ) : (
          <S.Image src={DefaultImg} />
        )}
      </S.ImageWrapper>
    </S.MateBox>
  );
};

export default MateBox;
