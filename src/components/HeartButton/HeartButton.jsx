import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import * as S from './HeartButton.style';
import { likeSignature } from '@/apis/request/signature';

const HeartButton = ({ id, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);
  const handleLike = async () => {
    try {
      await likeSignature(id);
      setLiked(prev => !prev);
      liked
        ? toast.success('게시글 좋아요 취소!')
        : toast.success('게시글 좋아요 성공!');
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {}, [isLiked]);

  return (
    <S.Container onClick={handleLike}>
      <S.OutLineHeart size={28} />
      <S.FillHeart size={24} isLiked={liked} />
    </S.Container>
  );
};

export default HeartButton;
