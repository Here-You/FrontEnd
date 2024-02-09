import { useNavigate } from 'react-router-dom';

import FollowButton from './FollowButton';
import * as S from './MateBox.style';
import Logo from '/images/mypage/MyPageLogo.svg';

const MateBox = ({ mate }) => {
  const navigate = useNavigate();

  return (
    <S.MateBox key={mate._id}>
      <S.MateDescriptionBox>
        <S.MateImage src={mate.mateImage ? mate.mateImage : Logo} />
        <S.TextBox>
          <S.TextContainer>
            <h1>{mate.mateName}</h1>
            <p>{mate.introduction}</p>
          </S.TextContainer>
          <FollowButton initialFollowState={mate.is_followed} id={mate._id} />
        </S.TextBox>
      </S.MateDescriptionBox>
      <S.ImageContainer>
        {mate?.signatures?.map(signature => (
          <S.SignatureContainer key={signature._id}>
            <S.SignatureImage
              onClick={() => navigate(`/signature/post/${signature._id}`)}
              src={signature.image ? signature.image : Logo}
            />
            <p>{signature.title}</p>
          </S.SignatureContainer>
        ))}
      </S.ImageContainer>
    </S.MateBox>
  );
};

export default MateBox;
