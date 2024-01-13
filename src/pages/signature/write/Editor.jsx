import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';

import location from '../../../../public/images/location.svg';
import optionImg1 from '../../../../public/images/signaturewriteOption1.svg';
import optionImg2 from '../../../../public/images/signaturewriteOption2.svg';
import optionImg3 from '../../../../public/images/signaturewriteOption3.svg';

export default function Editor() {
  const fileInputRef = useRef(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <EditorWrap>
      <Title placeholder="제목" />
      <Divider />
      <ContentInput placeholder="오늘의 시그니처를 기록해보세요!" />
      <LocationWrap>
        <LocationIcon src={location} />
        <LocationButton>위치 추가</LocationButton>
      </LocationWrap>

      <OptionWrap>
        <ButtonWrap>
          <OptionButton src={optionImg1} />
          {/*  사진 버튼 누르면 input 태그 클릭되게 해놓음  */}
          <OptionButton onClick={triggerFileInput} src={optionImg2} />
          <input
            style={{ display: 'none' }}
            onChange={handleImageChange}
            ref={fileInputRef}
            type="file"
          />
          <OptionButton src={optionImg3} />
        </ButtonWrap>
        <SubmitButton>발행</SubmitButton>
      </OptionWrap>
    </EditorWrap>
  );
}
const EditorWrap = styled.div`
  diplay: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
const Title = styled.input`
  diplay: flex;
  outline: none;
  border: none;
  font-family: 'Pretendard-bold';
  color: var(--black, #393939);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Divider = styled.div`
  diplay: flex;
  background: var(--gray2, #c8c8c8);
  width: 100%;
  height: 1px;
  margin: 15px 0px;
`;
const ContentInput = styled.textarea`
  diplay: flex;
  width: 100%;
  height: 50%;
  outline: none;
  border: none;
  color: var(--gray, #828282);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const LocationWrap = styled.div`
  display: flex;
  align-items: center;

  margin: 10px 0px;
`;
const LocationIcon = styled.img`
  diplay: flex;
  margin: 0px 5px;
`;
const LocationButton = styled.div`
  diplay: flex;
  color: var(--gray, #828282);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: black;
  }
`;
const OptionWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonWrap = styled.div`
  diplay: flex;
`;
const OptionButton = styled.img`
  diplay: flex;
  margin: 0px 5px;
`;

const SubmitButton = styled.div`
  diplay: flex;
  position: absolute;
  right: 5%;
  border-radius: 5px;
  background: var(--New-Main, #21b69c);
  padding: 5px 11px;
  justify-content: center;
  align-items: center;
  color: white;
`;
