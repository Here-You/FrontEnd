import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomScrollPage.style';
import Location from '/icons/Location.svg';
import LeftIcon from '/icons/left.svg';
import RightIcon from '/icons/right.svg';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomScrollPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={false}
        header={
          <S.HeaderWrapper>
            <h3>내 여정 리스트</h3>
            <S.HeaderContainer>
              <S.Image src={LeftIcon} />
              <h3>1월</h3>
              <S.Image src={RightIcon} />
            </S.HeaderContainer>
          </S.HeaderWrapper>
        }>
        <div
          style={{
            height: '100%',
          }}>
          <S.ListWrapper>
            <S.ListContainer>
              <S.MarkImage src={Location} />
              <S.ListDescriptionContainer>
                <h2>제주 게스트하우스에서의 일주일</h2>
                <S.TextContainer>
                  <p>작성 일지 1개</p>
                  <date>1/1~1/8</date>
                </S.TextContainer>
              </S.ListDescriptionContainer>
            </S.ListContainer>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListContainer>
              <S.MarkImage src={Location} />
              <S.ListDescriptionContainer>
                <h2>제주 게스트하우스에서의 일주일</h2>
                <S.TextContainer>
                  <p>작성 일지 1개</p>
                  <date>1/1~1/8</date>
                </S.TextContainer>
              </S.ListDescriptionContainer>
            </S.ListContainer>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListContainer>
              <S.MarkImage src={Location} />
              <S.ListDescriptionContainer>
                <h2>제주 게스트하우스에서의 일주일</h2>
                <S.TextContainer>
                  <p>작성 일지 1개</p>
                  <date>1/1~1/8</date>
                </S.TextContainer>
              </S.ListDescriptionContainer>
            </S.ListContainer>
          </S.ListWrapper>
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomScrollPage;
