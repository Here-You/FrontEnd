import { useState } from 'react';

import * as S from './DetailPlan.style';
import Add from '/icons/Add.svg';
import CheckRing from '/icons/CheckRing.svg';
import MeatballsMenu from '/icons/MeatballsMenu.svg';
import Subtract from '/icons/Subtract.svg';

const DetailPlan = ({ isToggle, detailData, dataLength, lastPlan }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnChecked = async () => {
    // const res = await changeDetailPlan(id);
    // if (res) {
    //   console.log('일정 확인');
    // }
  };

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
    // console.log(menuOpen);
  };

  return (
    <S.DetailContainer $isToggle={isToggle}>
      <S.LinkLine $dataLength={dataLength} $lastPlan={lastPlan}>
        <S.Circle $dataLength={dataLength} $lastPlan={lastPlan} />
      </S.LinkLine>
      <S.PlanContainer>
        <S.MarginContainer />

        <S.ScrollContainer>
          {/* 예를 컴포넌트로 빼면 가능할지도.. */}
          {detailData.map(({ detailScheduleId, content, finish }) => (
            <S.PlanTextConatiner key={detailScheduleId}>
              <S.PlanText>
                <S.CursorPointer onClick={handleOnChecked}>
                  {finish ? (
                    <S.Image src={Subtract} />
                  ) : (
                    <S.Image src={CheckRing} />
                  )}
                </S.CursorPointer>
                <p>{content}</p>
              </S.PlanText>
              <S.PlanMenu>
                <S.CursorPointer onClick={handleOpenMenu}>
                  <S.Image src={MeatballsMenu} />
                </S.CursorPointer>
              </S.PlanMenu>
            </S.PlanTextConatiner>
          ))}
        </S.ScrollContainer>

        <S.AddDetailPlanContainer>
          <S.AddDetailPlanText>
            <S.CursorPointer>
              <S.Image src={Add} />
            </S.CursorPointer>
            <p>세부 일정 추가하기</p>
          </S.AddDetailPlanText>
        </S.AddDetailPlanContainer>
      </S.PlanContainer>
    </S.DetailContainer>
  );
};

export default DetailPlan;
