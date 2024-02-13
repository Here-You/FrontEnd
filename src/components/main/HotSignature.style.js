import styled from 'styled-components';

import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid var(--gray2, #c8c8c8);
  background: var(--main, #fff);
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 10px auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const Time = styled.div`
  display: flex;
  color: rgba(57, 57, 57, 0.8);
  font-family: 'Pretendard-semibold';
`;

const Text = styled.div`
  display: flex;
  color: #393939;
  font-size: 20px;
  font-family: 'Pretendard-bold';
  font-weight: 700;
`;

export { Wrapper, Container, ContentContainer, Time, Text };
