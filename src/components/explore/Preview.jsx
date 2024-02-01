import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import nonHeart from '/images/explore/nonHeart.svg';
import theme from '@/theme';

export default function Preview(data) {
  const navigate = useNavigate();

  const handleOpenSignature = () => {
    navigate(`/signature/?title=${data.title}`, { state: data });
  };

  return (
    <PreviewWrap onClick={handleOpenSignature}>
      <PreviewImg src={data.page[0].img} />
      <Title>{data.title}</Title>
      <Profile>
        <ProfileImg src={data.userImgUrl} />
        <Nickname>cowboysj</Nickname>
      </Profile>
      <Info>
        <Date>{data.date}</Date>
        <HeartContainer>
          <img src={nonHeart} alt="Heart Icon" />
          <div>3012</div>
        </HeartContainer>
      </Info>
    </PreviewWrap>
  );
}

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  margin: 3%;
  cursor: pointer;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImg = styled.img`
  display: flex;
  max-width: 20px;
  max-height: 20px;
  border-radius: 100%;
`;
const Date = styled.div`
  display: flex;
  width: 70%;
  margin-left: 5px;
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PreviewImg = styled.img`
  display: flex;
  max-width: 140px;
  max-height: 140px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid var(--gray2, #c8c8c8);
`;
const Title = styled.div`
  display: flex;
  font-family: Pretendard-bold;
  color: var(--black, #393939);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 3px 0px;
`;
const Open = styled.div`
  display: flex;
  font-size: 12px;
  cursor: pointer;
`;
const Nickname = styled.div`
  display: flex;
  font-size: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
const HeartContainer = styled.div`
  display: flex;
`;
