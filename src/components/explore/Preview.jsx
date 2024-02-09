import { useNavigate } from 'react-router-dom';

import * as S from './PreviewStyle.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import nonHeart from '/images/signature/ClickedHeart.svg';

const Preview = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.PreviewWrap onClick={() => navigate(`/signature/post/${data?._id}`)}>
        <S.PreviewImg src={data?.image} />
        <S.Title>{data?.title}</S.Title>
        <S.Profile>
          <S.ProfileImg src={data?.userImage ? data?.userImage : Logo} />
          <S.Nickname>{data?.userName}</S.Nickname>
        </S.Profile>
        <S.Info>
          <S.Date>{data?.date}</S.Date>
          <S.HeartContainer>
            <img src={nonHeart} alt="Heart Icon" />
            <div>{data?.liked}</div>
          </S.HeartContainer>
        </S.Info>
      </S.PreviewWrap>
    </>
  );
};

export default Preview;
