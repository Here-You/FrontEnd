import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import * as S from './BottomScrollPage.style';
import BottomTravelList from './bottomTravelList/BottomTravelList';
import LeftIcon from '/icons/left.svg';
import RightIcon from '/icons/right.svg';
import { TRAVEL } from '@/constants/travel';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomScrollPage = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  const handleIncrease = () => {
    if (count < 12) setCount(prev => prev + 1);
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={false}
        snapPoints={({ maxHeight }) => [maxHeight * 0 + 500]}
        header={
          <S.HeaderWrapper>
            <h3>내 여정 리스트</h3>
            <S.HeaderContainer>
              <S.Image src={LeftIcon} onClick={handleDecrease} />
              <h3>{count}월</h3>
              <S.Image src={RightIcon} onClick={handleIncrease} />
            </S.HeaderContainer>
          </S.HeaderWrapper>
        }>
        <div
          style={{
            height: '100%',
          }}>
          {TRAVEL.map(({ title, startDate, endDate, count }, idx) => {
            return (
              <BottomTravelList
                title={title}
                startDate={startDate}
                endDate={endDate}
                count={count}
              />
            );
          })}
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomScrollPage;
