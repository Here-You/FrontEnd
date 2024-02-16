import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Modal from '../Modal';
import * as S from './InviteMatesModal.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { useGetSearchInfiniteMate } from '@/hooks/mate/queries/useGetSearchInfiniteMate';
import useInviteMatesModal from '@/hooks/modal/useInviteMatesModal';
import useDebounce from '@/hooks/useDebounce';
import useMatesStore from '@/store/matesStore';

const InviteMatesModal = () => {
  const InviteMatesModal = useInviteMatesModal();
  const [nickname, setNickname] = useState('');
  const debouncedNickname = useDebounce(nickname, 2000);

  const { selectedMates, addSelectedMate, removeSelectedMate } =
    useMatesStore();

  const mateIds = selectedMates.map(mate => mate.id);

  const {
    data: search,
    isLoading,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetSearchInfiniteMate(debouncedNickname, 2);

  const searchMates = search?.pages;

  console.log(searchMates);

  const handleInviteClick = () => {
    InviteMatesModal.onClose();
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

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
        {isLoading ? (
          <div>로딩중입니다...</div>
        ) : (
          searchMates?.map(searchMate =>
            searchMate?.data?.data?.data.map(mate => {
              const isSelected = mateIds.includes(mate.id);
              return (
                <S.ProfileContainer
                  key={mate.id}
                  isSelected={isSelected}
                  onClick={() => {
                    isSelected
                      ? removeSelectedMate(mate.id)
                      : addSelectedMate(mate);
                  }}>
                  <S.ProfileImage src={mate.image ? mate.image : Logo} />
                  <S.TextContainer>
                    <h2>{mate.name}</h2>
                    <h3>@{mate.email}</h3>
                    <h4>{mate.introduction}</h4>
                  </S.TextContainer>
                </S.ProfileContainer>
              );
            }),
          )
        )}
        <div
          ref={ref}
          style={{
            height: '5px',
          }}></div>
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
