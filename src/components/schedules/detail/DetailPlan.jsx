import { useState } from 'react';

import * as S from './DetailPlan.style';
import Add from '/icons/Add.svg';
import CheckRing from '/icons/CheckRing.svg';
import EditLight from '/icons/EditLight.svg';
import Subtract from '/icons/Subtract.svg';
import Trash from '/icons/Trash.svg';
import {
  deleteDetailSchedule,
  postDetailSchedule, // updateDetailSchedule,
} from '@/apis/request/home';

const DetailPlan = ({
  scheduleId,
  isToggle,
  detailData,
  dataLength,
  lastPlan,
}) => {
  const [newPlan, setNewPlan] = useState('');
  const [editPlan, setEditPlan] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const handleOnSaveNewPlan = async () => {
    // 새로운 할 일 저장 요청
    if (!newPlan.trim()) {
      alert('할 일을 작성해주세요!');
    } else {
      const res = await postDetailSchedule({ scheduleId, newPlan });
      if (res) {
        console.log(res);
        alert('세부 일정이 저장되었습니다');
        setIsOpenInput(false);
        setNewPlan('');
      }
    }
  };

  // const handleOnEditPlan = async detailScheduleId => {
  //   //새로운 할 일 수정 요청
  //   setEditingId(null);
  //   if (!editPlan.trim()) {
  //     alert('할 일을 작성해주세요!');
  //   } else {
  //     const res = await updateDetailSchedule({
  //       scheduleId,
  //       detailScheduleId,
  //       editPlan,
  //     });
  //     if (res) {
  //       console.log(res);
  //       alert('세부 일정이 수정되었습니다');
  //       setIsOpenEdit(false);
  //       setEditPlan('');
  //     }
  //   }
  // };

  const deletePlan = async detailScheduleId => {
    // 해당 할 일 삭제 요청
    const res = await deleteDetailSchedule({ scheduleId, detailScheduleId });
    if (res) {
      console.log(res);
      alert('세부 일정이 삭제되었습니다');
    }
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
          {detailData.map(({ detailScheduleId, content, finish }) => (
            <S.PlanTextConatiner key={detailScheduleId}>
              <S.PlanText>
                {finish ? (
                  <S.Image src={Subtract} onClick={handleOnChecked} />
                ) : (
                  <S.Image src={CheckRing} onClick={handleOnChecked} />
                )}
                {editingId === detailScheduleId ? (
                  <>
                    <S.Input
                      placeholder="할 일 입력"
                      value={editPlan}
                      onChange={e => setEditPlan(e.target.value)}
                    />
                    <S.SaveButton
                      onClick={() => handleOnEditPlan(detailScheduleId)}>
                      저장
                    </S.SaveButton>
                  </>
                ) : (
                  <p>{content}</p>
                )}
                {!isOpenEdit && editingId === null && (
                  <S.PlanMenu>
                    <S.Image
                      src={EditLight}
                      onClick={() => {
                        setEditPlan(content);
                        setEditingId(detailScheduleId);
                        setIsOpenEdit(true);
                        setIsOpenInput(false);
                      }}
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
              <S.Input
                placeholder="새로운 할 일 입력"
                value={newPlan}
                onChange={e => setNewPlan(e.target.value)}
              />
              <S.SaveButton onClick={handleOnSaveNewPlan}>저장</S.SaveButton>
            </>
          ) : (
            <S.AddDetailPlanText
              onClick={() => {
                setIsOpenInput(true);
                setIsOpenEdit(false);
                setEditingId(null);
              }}>
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
