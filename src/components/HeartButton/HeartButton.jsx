import { useState } from 'react';
import toast from 'react-hot-toast';

import * as S from './HeartButton.style';
import { likeSignature } from '@/apis/request/signature';

const HeartButton = ({ id, like, setLike, count, setCount }) => {
  const handleLike = async () => {
    try {
      await likeSignature(id);
      setLike(prev => !prev);
      like ? setCount(prev => prev - 1) : setCount(prev => prev + 1);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <S.Container onClick={handleLike}>
      <>
        <S.OutLineHeart size={28} />
        <S.FillHeart size={24} isLiked={like} />
      </>
      <h3>{count}</h3>
    </S.Container>
  );
};

export default HeartButton;
