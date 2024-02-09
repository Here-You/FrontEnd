import { useState } from 'react';

import Modal from '../Modal';
import * as S from './InviteMatesModal.style';
import { useSearchMate } from '@/hooks/mate/useSearchMate';
import useInviteMatesModal from '@/hooks/modal/useInviteMatesModal';
import useDebounce from '@/hooks/useDebounce';
import useMatesStore from '@/store/matesStore';

const InviteMatesModal = () => {
  const InviteMatesModal = useInviteMatesModal();
  const [nickname, setNickname] = useState('');
  const debouncedNickname = useDebounce(nickname, 2000);
  const { selectedMates, addSelectedMate, clearSelectedMates } =
    useMatesStore();

  const mateIds = selectedMates.map(mate => mate.id);

  const { data, loading, error } = useSearchMate(debouncedNickname, 1, 1);

  const handleInviteClick = () => {
    InviteMatesModal.onClose();
  };

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
      <S.MatesContainer>
        {loading ? (
          <div>로딩중입니다...</div>
        ) : (
          data.map(d => {
            const isSelected = mateIds.includes(d.id);
            return (
              <S.ProfileContainer
                key={d.id}
                isSelected={isSelected}
                onClick={() => {
                  isSelected ? clearSelectedMates(d.id) : addSelectedMate(d);
                }}>
                <S.ProfileImage src={d.image} />
                <S.TextContainer>
                  <h2>{d.name}</h2>
                  <h3>@{d.nickname}</h3>
                  <h4>{d.introduction}</h4>
                </S.TextContainer>
              </S.ProfileContainer>
            );
          })
        )}
      </S.MatesContainer>
    </S.Container>
  );

  return (
    <Modal
      isOpen={InviteMatesModal.isOpen}
      onClose={InviteMatesModal.onClose}
      onSubmit={handleInviteClick}
      actionLabel="초대하기"
      body={BodyContent}
      secondaryAction={InviteMatesModal.onClose}
      secondaryActionLabel="취소"
    />
  );
};

export default InviteMatesModal;
