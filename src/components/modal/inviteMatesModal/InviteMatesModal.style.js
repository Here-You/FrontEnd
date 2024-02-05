import styled from 'styled-components';

import theme from '@/theme';
import { IoSearchOutline } from 'react-icons/io5';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  gap: 30px;

  h1 {
    font-size: 1rem;
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

const InputContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER}
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;

  border: 2px solid ${theme.COLOR.MAIN.GRAY};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const SearchImage = styled(IoSearchOutline)`
  background-color: ${theme.COLOR.MAIN.GRAY};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  cursor: pointer;
`;

export { Container, InputContainer, Input, SearchImage };
