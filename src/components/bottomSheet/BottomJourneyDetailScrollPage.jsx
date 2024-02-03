import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomDetailScrollPage.style';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomJourneyDetailScrollPage = ({ journeyInfo }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { journeyId } = useParams();
  console.log(journeyInfo);

  const journeyTitle = journeyInfo?.journey_title;
  const scheduleLocations = journeyInfo?.schedule_locations;
  const startDate = journeyInfo?.date_group_id.startDate;
  const endDate = journeyInfo?.date_group_id.endDate;

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
            {scheduleLocations?.slice(0, 3).map((s, index) => (
              <S.ImageWrapper key={index}>
                <S.Image src={s?.diary_image.imageKey} />
              </S.ImageWrapper>
            ))}
            {scheduleLocations && scheduleLocations.length > 3 && <p>...</p>}
          </S.ImageContainer>
          <S.ButtonContainer>
            <S.Button onClick={() => navigate(`/dailyrecord/${journeyId}`)}>
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
