import { useRef, useState } from 'react';

import Modal from '../Modal';
import * as S from './InviteMatesModal.style';
import { getSearchInviteMate } from '@/apis/request/mate';
import { useSearchMate } from '@/hooks/mate/useSearchMate';
import useInviteMatesModal from '@/hooks/modal/useInviteMatesModal';

const InviteMatesModal = () => {
  const InviteMatesModal = useInviteMatesModal();
  const [nickname, setNickname] = useState('');

  const { data, loading, error } = useSearchMate(nickname);

  const BodyContent = (
    <S.Container>
      <h1>초대할 메이트의 닉네임을 입력하세요.</h1>
      <S.InputContainer>
        <S.Input
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          placeholder="닉네임을 입력하세요."
        />
        <S.SearchImage color="black" size="40" />
      </S.InputContainer>
    </S.Container>
  );

  return (
    <Modal
      isOpen={InviteMatesModal.isOpen}
      onClose={() => {
        InviteMatesModal.onClose();
      }}
      onSubmit={() => console.log('123')}
      actionLabel="초대하기"
      body={BodyContent}
      secondaryAction={() => {}}
      secondaryActionLabel="취소"
    />
  );
};

export default InviteMatesModal;
