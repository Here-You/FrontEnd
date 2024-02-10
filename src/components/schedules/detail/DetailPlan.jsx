import { useState } from 'react';
import toast from 'react-hot-toast';

import * as S from './DetailPlan.style';
import Add from '/icons/Add.svg';
import CheckRing from '/icons/CheckRing.svg';
import EditLight from '/icons/EditLight.svg';
import Subtract from '/icons/Subtract.svg';
import Trash from '/icons/Trash.svg';
import {
  addDetailSchedule,
  changeDetailScheduleStatus,
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleOnSaveNewPlan = async () => {
    // 새로운 할 일 저장 요청
    if (!newPlan.trim()) {
      alert('할 일을 작성해주세요!');
    } else {
      try {
        setLoading(true);
        const res = await addDetailSchedule({
          scheduleId: scheduleId,
          content: newPlan,
        });
        if (res) {
          toast('할 일이 저장되었습니다');
          setIsOpenInput(false);
          setNewPlan('');
        }
      } catch (e) {
        setError(true);
        console.log(e);
        toast('할 일 저장 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOnEditPlan = async detailScheduleId => {
    setEditingId(null);
    if (!editPlan.trim()) {
      alert('할 일을 작성해주세요!');
    } else {
      try {
        setLoading(true);
        const res = await postDetailSchedule({
          detailId: detailScheduleId,
          content: editPlan,
        });
        if (res) {
          toast('할 일이 수정되었습니다');
          setIsOpenEdit(false);
          setEditPlan('');
        }
      } catch (e) {
        setError(true);
        console.log(e);
        toast('할 일 수정 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    }
  };

  const deletePlan = async detailScheduleId => {
    // 해당 할 일 삭제 요청
    try {
      setLoading(true);
      const res = await deleteDetailSchedule({ detailId: detailScheduleId });
      if (res) {
        toast('할 일이 삭제되었습니다');
      }
    } catch (e) {
      setError(true);
      console.log(e);
      toast('할 일 삭제 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleOnChecked = async detailScheduleId => {
    try {
      setLoading(true);
      const res = await changeDetailScheduleStatus(detailScheduleId);
      if (res) toast('할 일 체크');
    } catch (e) {
      setError(true);
      console.log(e);
      toast('할 일 체크 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.DetailContainer $isToggle={isToggle}>
      <S.LinkLine $dataLength={dataLength} $lastPlan={lastPlan}>
        <S.Circle $dataLength={dataLength} $lastPlan={lastPlan} />
      </S.LinkLine>
      <S.PlanContainer>
        <S.MarginContainer />

        <S.ScrollContainer>
          {detailData.map(({ detailScheduleId, content, isDone }) => (
            <S.PlanTextConatiner key={detailScheduleId}>
              <S.PlanText>
                {isDone ? (
                  <S.CheckImg
                    src={Subtract}
                    onClick={() => handleOnChecked(detailScheduleId)}
                  />
                ) : (
                  <S.Image
                    src={CheckRing}
                    onClick={() => handleOnChecked(detailScheduleId)}
                  />
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
