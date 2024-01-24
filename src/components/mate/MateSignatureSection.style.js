import styled from 'styled-components';

import theme from '@/theme';

const ContentsContainer = styled.div`
  width: 375px;
  margin-bottom: 32px;
`;

const PreviewContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  width: 335px;
`;

const SubWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 18px;
  }
`;

export { ContentsContainer, SubWrapper, PreviewContainer };
