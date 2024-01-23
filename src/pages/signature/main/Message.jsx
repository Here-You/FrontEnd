import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import edit from '../../../../public/images/signature/editButton.svg';
import plus from '../../../../public/images/signature/plusButton.svg';
import SignatureTag from '../components/SignatureTag';

export default function Message() {
  const navigate = useNavigate();
  const content =
    '저는 애착 인형 2개가 있고, 이 친구들과 함께 여행을 다니고 있어요!';
  return (
    <MessageWrap>
      <MessageBox>
        <MessageContent>{content}</MessageContent>
        <TagWrap>
          <SignatureTag tagName={'인형 🧸'} />
          <SignatureTag tagName={'캠핑 🏕️'} />
        </TagWrap>
      </MessageBox>
      <ButtonWrap>
        <PostButton onClick={() => navigate('write')}>
          <ButtonImg src={plus} />
          시그니처 기록하기
        </PostButton>
        <EditButton onClick={() => navigate('edit')}>
          <ButtonImg src={edit} />
          시그니처 편집하기
        </EditButton>
      </ButtonWrap>
    </MessageWrap>
  );
}

const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: center;
  justify-content: space-around;
`;

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid var(--gray, #828282);
  width: 90%;
  height: 70%;
`;
const MessageContent = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-bold;
  font-size: 14px;
  text-align: center;
  height: 50%;
`;
const TagWrap = styled.div`
  display: flex;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20%;
  width: 90%;
`;
const ButtonImg = styled.img`
  display: flex;
  max-width: 20%;
`;
const PostButton = styled.button`
  display: flex;
  width: 45%;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background: #1b9c85;
  color: white;
  outline: none;
  border: none;
  padding: 5px 11px;
  cursor: pointer;
`;
const EditButton = styled.button`
  display: flex;
  width: 45%;
  justify-content: space-evenly;
  align-items: center;
  background: var(--gray2, #c8c8c8);
  color: white;
  outline: none;
  border: none;
  padding: 5px 11px;
  border-radius: 5px;
  cursor: pointer;
`;
