import { useState } from 'react';

import * as S from './DetailPlan.style';
import Add from '/icons/Add.svg';
import CheckRing from '/icons/CheckRing.svg';
import EditLight from '/icons/EditLight.svg';
import Subtract from '/icons/Subtract.svg';
import Trash from '/icons/Trash.svg';

const DetailPlan = ({ isToggle, detailData, dataLength, lastPlan }) => {
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const handleOnSaveNewPlan = async () => {
    // 새로운 세부 일정 저장 요청

    alert('세부 일정이 저장되었습니다');
    setIsOpenInput(false);
  };

  const handleOnEditPlan = () => {
    //새로운 할 일 수정 요청

    alert('세부 일정이 수정되었습니다');
    setIsOpenEdit(false);
  };

  const deletePlan = async detailScheduleId => {
    // 해당 할 일 삭제 요청

    alert('세부 일정이 삭제되었습니다');
  };

  const handleOnChecked = async () => {
    // 해당 할 일 check 요청
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
                {finish ? (
                  <S.Image src={Subtract} onClick={handleOnChecked} />
                ) : (
                  <S.Image src={CheckRing} onClick={handleOnChecked} />
                )}
                {isOpenEdit ? (
                  <>
                    <S.Input placeholder="할 일 입력" />
                    <S.SaveButton onClick={handleOnEditPlan}>저장</S.SaveButton>
                  </>
                ) : (
                  <p>{content}</p>
                )}
                {!isOpenEdit && (
                  <S.PlanMenu>
                    <S.Image
                      src={EditLight}
                      onClick={() => setIsOpenEdit(true)}
                    />
                    <S.Image
                      src={Trash}
                      onClick={() => deletePlan(detailScheduleId)}
                    />
                  </S.PlanMenu>
                )}
              </S.PlanText>
            </S.PlanTextConatiner>
          ))}
        </S.ScrollContainer>

        <S.AddDetailPlanContainer>
          {isOpenInput ? (
            <>
              <S.Input placeholder="새로운 할 일 입력" />
              <S.SaveButton onClick={handleOnSaveNewPlan}>저장</S.SaveButton>
            </>
          ) : (
            <S.AddDetailPlanText onClick={() => setIsOpenInput(true)}>
              <S.Image src={Add} />
              <p>세부 일정 추가하기</p>
            </S.AddDetailPlanText>
          )}
        </S.AddDetailPlanContainer>
      </S.PlanContainer>
    </S.DetailContainer>
  );
};

export default DetailPlan;
