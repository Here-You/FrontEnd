import React from 'react';

import * as S from './SignatureEdit.style';
import LocationLight from '/icons/LocationLight.svg';
import addButton from '/images/addButton.svg';
import SearchMap from '@/components/searchMap/SearchMap';
import useHandleImageChange from '@/hooks/image/useHandleImageChange';
import useSignatureEdit from '@/store/useSignatureEdit';

const Page = ({ image, content, location }) => {
  const { pages, updatePage, currentPageIndex } = useSignatureEdit();

  const handleImageChange = useHandleImageChange(currentPageIndex, updatePage);

  const handleContentChange = e => {
    const newContent = e.target.value;
    updatePage(currentPageIndex, { content: newContent });
  };

  return (
    <S.PageContainer>
      <S.LocationContainer>
        <S.Icon src={LocationLight} />
        <SearchMap
          pageIndex={currentPageIndex}
          inputValue={location}
          selectLocation={info => {
            updatePage(currentPageIndex, { location: info.name });
          }}
          placeholder="위치 입력"
        />
      </S.LocationContainer>
      <S.InputWrap>
        {/* data:image/jpeg;base64, */}
        {image && image.startsWith('https://hereyou-cdn.kaaang.dev/') ? (
          <S.Image src={image} />
        ) : (
          <S.Image src={`data:image/jpeg;base64,${image}`} />
        )}
        <S.PhotoButton>
          <img src={addButton} alt="Add Button" />
          <S.ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </S.PhotoButton>
      </S.InputWrap>
      <S.ContentInput
        placeholder="오늘의 시그니처를 기록해보세요!"
        value={content || pages[currentPageIndex]?.content}
        onChange={handleContentChange}
      />
    </S.PageContainer>
  );
};

export default Page;
