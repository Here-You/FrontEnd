import { useState } from 'react';
import toast from 'react-hot-toast';

import * as S from './HeartButton.style';
import { likeSignature } from '@/apis/request/signature';

const HeartButton = ({ id, isLiked }) => {
  const handleLike = async () => {
    try {
      await likeSignature(id);
      toast.success('게시글 좋아요 상태 변경 성공!');
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <S.Container onClick={handleLike}>
      <S.OutLineHeart size={28} />
      <S.FillHeart size={24} isLiked={isLiked} />
    </S.Container>
  );
};

export default HeartButton;
