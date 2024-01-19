import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//시그니처 글 미리보기
//Data : 유저 프사, 작성 날짜, 미리보기 사진 이미지, 제목, 하트 수

export default function Preview(data) {
  const navigate = useNavigate();

  //이거 나중에 수정하기
  const handleOpenSignature = () => {
    navigate(`/signature/?title=${data.title}`, { state: data });
  };

  return (
    <PreviewWrap onClick={handleOpenSignature}>
      <Profile>
        <ProfileImg src={data.userImgUrl} />
        <Date>{data.date}</Date>
      </Profile>
      <PreviewImg src={data.page[0].img} />
      <Title>{data.title}</Title>
      <Open>자세히보기</Open>
    </PreviewWrap>
  );
}

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 140px;
  margin: 3%;
  cursor: pointer;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const ProfileImg = styled.img`
  display: flex;
  max-width: 30px;
  max-height: 30px;
  border-radius: 100%;
`;
const Date = styled.div`
  display: flex;
  width: 70%;
  margin-left: 5px;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PreviewImg = styled.img`
  display: flex;
  max-width: 150px;
  max-height: 150px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid var(--gray2, #c8c8c8);
`;
const Title = styled.div`
  display: flex;
  font-family: Pretendard-bold;
  color: var(--black, #393939);
  font-size: 14px;
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
