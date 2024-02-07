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
  width: 60%;
`;

const Input = styled.input`
  width: 100%;
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

const MatesContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.COLOR.MAIN.LIGHT_BLACK : 'none'};
`;

const TextContainer = styled.div`
  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 12px;
    color: ${theme.COLOR.MAIN.GRAY};
  }

  h4 {
    font-size: 14px;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export {
  Container,
  InputContainer,
  Input,
  SearchImage,
  MatesContainer,
  ProfileContainer,
  TextContainer,
  ProfileImage,
};
