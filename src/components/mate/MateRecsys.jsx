import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FollowButton2 from './FollowButton2';
import * as S from './MateBox.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import theme from '@/theme';

const MateRecsys = ({ mate }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const DefaultImg =
    'https://i.pinimg.com/564x/cb/a0/65/cba065ca68bafa4da74df37c0b39d8e8.jpg';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <MateBox
      onClick={() => {
        navigate(`/profile/${mate._id}`);
      }}
      key={mate._id}>
      <MateDescriptionBox>
        <TextBox>
          <MateImage
            src={imageError || !mate.mateImage ? Logo : mate.mateImage}
            onError={handleImageError}
          />
          <TextContainer>
            <Name>{mate.mateName}</Name>
            <Info>{mate.introduction}</Info>
          </TextContainer>
          <ButtonContainer>
            <FollowButton2
              initialFollowState={mate.is_followed}
              id={mate._id}
            />
            <Button>시그니처 보러가기</Button>
          </ButtonContainer>
        </TextBox>
      </MateDescriptionBox>
    </MateBox>
  );
};

export default MateRecsys;

const MateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.1px solid #828282;
  border-radius: 20px;
  height: 28vh;
`;

const MateDescriptionBox = styled.div`
  display: flex;
  flex-direcion: column;
  width: 90%;
  margin: 0 auto;
  height: 80%;
  margin-right: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 0.8rem;
    margin-bottom: 3px;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  p {
    font-size: 0.8rem;
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const MateImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  justify-content: center;

  align-items: center;
`;
const Button = styled.button`
  border: none;
  color: white;
  background-color: ${theme.COLOR.MAIN.GREEN};
  padding: 5px 18px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  width: 120px;

  &:hover {
    transform: scale(0.9);
  }
`;

const Info = styled.div`
  display: flex;

  color: ${theme.COLOR.MAIN.GRAY};
  font-family: 'Pretendard-semibold';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Name = styled.div`
  display: flex;
  color: ${theme.COLOR.MAIN.BLACK};
  font-family: 'Pretendard-bold';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
