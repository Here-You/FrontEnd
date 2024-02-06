import * as S from './MateRuleWrite.style';
import PlusUser from '/images/mate/add-user.svg';
import Modal from '@/components/modal/Modal';
import InviteMatesModal from '@/components/modal/inviteMatesModal/InviteMatesModal';
import useInviteMatesModal from '@/hooks/modal/useInviteMatesModal';
import useMatesStore from '@/store/matesStore';

const MateRuleWritePage = () => {
  const inviteMatesModal = useInviteMatesModal();
  const selectedMates = useMatesStore(state => state.selectedMates);

  console.log(selectedMates);
  return (
    <S.Container>
      <InviteMatesModal />
      <S.Wrapper>
        <S.Header>
          <h1>제주여행을 떠나면</h1>
          <S.PlusSvg src={PlusUser} onClick={() => inviteMatesModal.onOpen()} />
        </S.Header>
        <S.MatesContainer>
          {selectedMates.map(s => (
            <>
              <S.MatesImages src={s.image} />
            </>
          ))}
        </S.MatesContainer>
        <S.Content>
          <S.TitleInput placeholder="1. 규칙 1을 입력해주세요!" />
          <S.TextInput
            placeholder="1. 규칙 1 내용을 입력해주세요!"
            rows="5"
            columns="2"
          />
        </S.Content>
      </S.Wrapper>
      <S.SubmitBtn>발행하기</S.SubmitBtn>
    </S.Container>
  );
};

export default MateRuleWritePage;
