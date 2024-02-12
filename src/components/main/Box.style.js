import styled from 'styled-components';

import theme from '@/theme';

const Wrapper = styled.div`
  display: flex;
  width: 48%;
  height: 100%;
  border-radius: 20px;
  background: var(--main, #fff);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
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
  width: 70%;
  max-height: 80%;
`;

export { Wrapper, Container, Icon };
