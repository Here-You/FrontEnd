import styled from 'styled-components';

import theme from '@/theme';

const MarkImage = styled.img`
  height: 40px;
`;

const ListContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin: 20px;
`;

const ListWrapper = styled.div`
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
  MarkImage,
  ListWrapper,
  ListContainer,
  ListDescriptionContainer,
  TextContainer,
};
