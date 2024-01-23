import styled from 'styled-components';

import theme from '@/theme';

const DropdownContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 24px;
  height: auto;
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  background-color: ${theme.COLOR.MAIN.WHITE};
  position: absolute;
  margin-top: 5px;
  gap: 9px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const DropdownItem = styled.img`
  align-items: center;
`;

export { DropdownContainer, DropdownItem };
