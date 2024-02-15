import styled from 'styled-components';

import theme from '@/theme';
import { IoSearchOutline } from 'react-icons/io5';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
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
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 400px;
  overflow-y: scroll;
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
  width: 250px;
  height: 120px;
`;

const TextContainer = styled.div`
  white-space: nowrap;
  h2 {
    font-size: 15px;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 12px;
    color: ${theme.COLOR.MAIN.GRAY};
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    font-size: 14px;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ProfileImage = styled.img`
  width: 55px;
  height: 55px;
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
