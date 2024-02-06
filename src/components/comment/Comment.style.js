import styled from 'styled-components';

import theme from '@/theme';

const CommentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-top: 10px;
  width: 80%;
  align-items: flex-start;
`;

const CommentBox = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

const ProfileImages = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const TextBox = styled.div`
  width: 100%;
`;

const TopText = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
`;

const BottomText = styled.div``;

export {
  CommentContainer,
  TextBox,
  ProfileImages,
  CommentBox,
  TopText,
  BottomText,
};
