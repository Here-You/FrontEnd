import styled from 'styled-components';

import theme from '@/theme';

const HeaderWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

const Image = styled.img`
  height: 20px;
`;

const MarkImage = styled.img`
  height: 40px;
`;

const ListWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin: 20px;
`;

const ListContainer = styled.div`
  border: 1px solid #21b69c;
  border-radius: 20px;
  width: 90%;
  ${theme.ALIGN.ROW_CENTER};
  padding: 20px 40px;
  gap: 60px;
  color: #21b69c;
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
