import styled from 'styled-components';

import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  width: 48%;
  height: 90%;
  border-radius: 20px;
  background: var(--main, #fff);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
`;

const Icon = styled.img`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: -10px;
  max-height: 50%;
`;

export { Wrapper, Container, Icon };
