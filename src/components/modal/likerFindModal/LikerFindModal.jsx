import { useNavigate, useParams } from 'react-router-dom';

import Modal from '../Modal';
import * as S from './LikerFindModal.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { postFollowMate } from '@/apis/request/mate';
import useLikersModal from '@/hooks/modal/useLikersModal';
import { useGetLikers } from '@/hooks/signature/queries/useGetLikers';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const LikerFindModal = () => {
  const { signatureId } = useParams();
  const navigate = useNavigate();
  const { isOpen, isClose, onClose } = useLikersModal();
  const queryClient = useQueryClient();

  const { data, isPending, isError } = useGetLikers(signatureId);

  const likeCount = data?.data?.data?.liked;

  const { mutateAsync } = useMutation({
    mutationFn: postFollowMate,
    onSuccess: () => {
      queryClient.invalidateQueries(['likers']);
    },
    onError: error => {
      console.error('팔로우 실패', error);
    },
  });

  const BodyContent = (
    <S.Container>
      <S.Title>이 게시글에 좋아요 누른사람 {likeCount}명</S.Title>
      {data?.data?.data?.profiles?.map(profile => (
        <S.ProfileContainer
          key={profile._id}
          onClick={() => navigate(`/profile/${profile._id}`)}>
          <S.UserImg src={profile.image ? profile.image : Logo} />
          <S.TextContainer>
            <S.UserName>{profile.nickname}</S.UserName>
            <S.UserBio>{profile.introduction}</S.UserBio>
          </S.TextContainer>
          <S.Wrapper>
            {profile.is_followed !== null && (
              <S.Button
                follow={profile.is_followed}
                onClick={async e => {
                  e.stopPropagation();
                  try {
                    mutateAsync(profile._id);
                  } catch (e) {
                    console.log(e);
                  }
                }}>
                {profile.is_followed ? '팔로잉' : '팔로우'}
              </S.Button>
            )}
          </S.Wrapper>
        </S.ProfileContainer>
      ))}
    </S.Container>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      body={BodyContent}
      onSubmit={onClose}
      actionLabel="취소"
    />
  );
};

export default LikerFindModal;
