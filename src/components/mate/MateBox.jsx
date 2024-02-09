import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MateBox.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { postFollowMate } from '@/apis/request/mate';

const MateBox = ({ mate }) => {
  const navigate = useNavigate();
  const [follow, setFollow] = useState(mate.is_followed);

  const handleChangeFollowState = async followId => {
    try {
      if (follow === true) {
        await postFollowMate(followId);
        alert('팔로우가 취소되었습니다.');
        setFollow(false);
      } else {
        await postFollowMate(followId);
        alert('팔로잉되었습니다.');
        setFollow(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.MateBox key={mate._id}>
      <S.MateDescriptionBox>
        <S.MateImage src={mate.mateImage ? mate.mateImage : Logo} />
        <S.TextBox>
          <S.TextContainer>
            <h1>{mate.mateName}</h1>
            <p>{mate.introduction}</p>
          </S.TextContainer>
          {follow ? (
            <S.Button onClick={() => handleChangeFollowState(mate._id)}>
              언팔로우
            </S.Button>
          ) : (
            <S.Button onClick={() => handleChangeFollowState(mate._id)}>
              팔로우
            </S.Button>
          )}
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
