import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MateBox.style';
import Logo from '/images/mypage/MyPageLogo.svg';

const MateBox = ({ mate }) => {
  const navigate = useNavigate();

  return (
    <S.MateBox key={mate._id}>
      <S.MateDescriptionBox>
        <S.MateImage src={mate.mateImage ? mate.mateImage : Logo} />
        <S.TextBox>
          <h1>{mate.mateName}</h1>
          <p>{mate.introduction}</p>
          <p>팔로우 버튼</p>
          {/* <p>{mate.is_followed}</p> */}
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
