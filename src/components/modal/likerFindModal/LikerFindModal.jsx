import { useNavigate, useParams } from 'react-router-dom';

import Modal from '../Modal';
import * as S from './LikerFindModal.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import FollowButton from '@/components/mate/FollowButton';
import useLikersModal from '@/hooks/modal/useLikersModal';
import { useGetLikers } from '@/hooks/signature/queries/useGetLikers';

const LikerFindModal = () => {
  const { signatureId } = useParams();
  const navigate = useNavigate();
  const { isOpen, isClose, onClose } = useLikersModal();

  const { data, isPending, isError } = useGetLikers(signatureId);

  const likeCount = data?.data?.data?.liked;

  const BodyContent = (
    <S.Container>
      <S.Title>이 게시글에 좋아요 누른사람 {likeCount}명</S.Title>
      {data?.data?.data?.profiles?.map(profile => (
        <S.ProfileContainer onClick={() => navigate(`/profile/${profile._id}`)}>
          <S.UserImg src={profile.image ? profile.image : Logo} />
          <S.TextContainer>
            <S.UserName>{profile.nickname}</S.UserName>
            <S.UserBio>{profile.introduction}</S.UserBio>
          </S.TextContainer>
          <S.Wrapper>
            <FollowButton
              initialFollowState={profile.is_followed}
              id={profile._id}
            />
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
      secondaryAction={onClose}
      secondaryActionLabel="취소"
    />
  );
};

export default LikerFindModal;
