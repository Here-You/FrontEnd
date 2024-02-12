import styled from 'styled-components';

import theme from '@/theme';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
const Text1 = styled.div`
  display: flex;
  color: #393939;
  font-size: 20px;
  font-family: 'Pretendard-bold';
  font-weight: 700;
`;
const Text2 = styled.div`
  display: flex;
  color: #393939;
  font-size: 13px;
  font-family: 'Pretendard-semibold';
  font-weight: 600;
`;
const Text3 = styled.div`
  display: flex;
  color: #393939;
  font-size: 17px;
  font-family: 'Pretendard-semibold';
  font-weight: 600;
`;

export { Text1, Text2, Text3, TextContainer };
