import styled from "styled-components";

import { FONT_SIZE } from '@/constants/size';

const LoginButton = styled.button`
  border-radius: 80px;
  width: 100%;
  border: 3px solid #21b69c;
  color: #21b69c;
  background-color: white;
  padding: 20px;
  margin-bottom: 26px;
  font-size: ${FONT_SIZE.BASE};

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

export { LoginButton };
