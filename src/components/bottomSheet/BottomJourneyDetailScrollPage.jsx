import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomDetailScrollPage.style';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomJourneyDetailScrollPage = ({ journeyInfo }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { journeyId } = useParams();

  const journeyTitle = journeyInfo?.journey?.title;
  const scheduleLocations = journeyInfo?.scheduleList;
  const startDate = journeyInfo?.journey?.startDate;
  const endDate = journeyInfo?.journey?.endDate;

  const validImageCount = scheduleLocations?.filter(
    s => s.diaryImage && s.diaryImage.imageUrl,
  ).length;

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
            <S.HeaderContainer>
              <h3>{journeyTitle}</h3>
              <S.DateContainer>
                <p>{startDate}</p>
                <p>~</p>
                <p>{endDate}</p>
              </S.DateContainer>
            </S.HeaderContainer>
          </S.HeaderWrapper>
        }>
        <div
          style={{
            height: '100%',
          }}>
          <S.ImageContainer>
            {scheduleLocations?.slice(0, 3).map((s, index) => {
              s.diaryImage === null ? (
                <></>
              ) : (
                <S.ImageWrapper key={index}>
                  <S.Image src={s?.diaryImage?.imageUrl} />
                </S.ImageWrapper>
              );
            })}
            {validImageCount > 3 && <p>...</p>}
          </S.ImageContainer>
          <S.ButtonContainer>
            <S.Button
              onClick={() =>
                validImageCount === 0
                  ? toast('아직 작성한 일지가 없어요!')
                  : navigate(`/dailyrecord/${journeyId}`)
              }>
              작성 일지 확인하기
            </S.Button>
            <S.Button onClick={() => navigate(`/map/journey/${journeyId}`)}>
              세부 여정 확인하기
            </S.Button>
            <S.CancelButton onClick={() => setOpen(prev => !prev)}>
              취소
            </S.CancelButton>
          </S.ButtonContainer>
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomJourneyDetailScrollPage;
