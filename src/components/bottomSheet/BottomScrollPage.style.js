import styled from 'styled-components';

import theme from '@/theme';

const HeaderWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Image = styled.img`
  height: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const MarkImage = styled.img`
  height: 40px;
`;

const ListWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin: 20px;
`;

const ListContainer = styled.div`
  color: ${theme.COLOR.MAIN.GREEN};
  border: 1px solid ${theme.COLOR.MAIN.GREEN};
  border-radius: 20px;
  width: 90%;
  padding: 20px 40px;
  ${theme.ALIGN.ROW_CENTER};
  gap: 60px;
`;

const ListDescriptionContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
`;

export {
  HeaderWrapper,
  HeaderContainer,
  Image,
  MarkImage,
  ListWrapper,
  ListContainer,
  TextContainer,
  ListDescriptionContainer,
};
