import styled from 'styled-components';

import theme from '@/theme';

const ListContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin: 20px;
`;

const ListWrapper = styled.div`
  width: 90%;
  padding: 20px 40px;
  color: #21b69c;

  border: 1px solid #21b69c;
  border-radius: 20px;

  ${theme.ALIGN.ROW_CENTER};
  gap: 60px;

  cursor: pointer;

  &:hover {
    background-color: ${theme.COLOR.MAIN.GREEN};
    color: ${theme.COLOR.MAIN.WHITE};
  }
`;

const MarkImage = styled.img`
  height: 40px;
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
