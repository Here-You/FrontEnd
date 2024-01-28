import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomDetailScrollPage.style';
import LeftIcon from '/icons/left.svg';
import RightIcon from '/icons/right.svg';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomDetailScrollPage = ({ journeyInfo }) => {
  const [open, setOpen] = useState(false);

  const scheduleLocations = journeyInfo?.schedule_locations;
  console.log(scheduleLocations);

  return (
    <>
      <S.Button onClick={() => setOpen(true)}>여정 보기</S.Button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={true}
        snapPoints={({ maxHeight }) => [maxHeight * 0 + 500]}
        header={
          <S.HeaderWrapper>
            <h3>내 여정 리스트</h3>
            <S.HeaderContainer>
              <h3>{journeyInfo?.journey_title}</h3>
            </S.HeaderContainer>
          </S.HeaderWrapper>
        }>
        <div
          style={{
            height: '100%',
          }}>
          <S.ImageContainer>
            {scheduleLocations?.slice(0, 3).map(s => {
              return (
                <S.ImageWrapper>
                  <S.Image src={s?.diary_image.imageKey} />
                </S.ImageWrapper>
              );
            })}
            <p>...</p>
          </S.ImageContainer>
          <S.ButtonContainer>
            <S.Button>작성 일지 확인하기</S.Button>
            <S.Button>세부 여정 확인하기</S.Button>
            <S.CancelButton>취소</S.CancelButton>
          </S.ButtonContainer>
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomDetailScrollPage;
