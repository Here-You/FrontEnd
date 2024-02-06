import styled from 'styled-components';

import theme from '@/theme';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Container = styled.div`
  position: relative;
  cursor: pointer;
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;

  &:hover {
    opacity: 0.8;
    transition: ease-in;
  }
`;

const OutLineHeart = styled(AiOutlineHeart)`
  position: absolute;
  fill: white;
  left: -2px;
  top: -2px;
`;

const FillHeart = styled(AiFillHeart)`
  fill: ${props => (props.isLiked ? 'red' : 'gray')};
`;

export { Container, FillHeart, OutLineHeart };
