import { RESPONSIVE_SIZE } from './constants/size';

/**
 * 반응형 디자인 (MOBILE, TABLET, PC)
 */
const WINDOW_SIZE = {
  MOBILE: `screen and (max-width: ${RESPONSIVE_SIZE.MOBILE})`,
  TABLET: `screen and (max-width: ${RESPONSIVE_SIZE.TABLET})`,
  PC: `screen and (max-width: ${RESPONSIVE_SIZE.PC})`,
};

/**
 * 정렬 사용방법
 * ROW_CENTER: 가로 정렬
 * COLUMN_CENTER: 세로 정렬
 */
const ALIGN = {
  // FLEX
  ROW_CENTER: `
    display: flex;
    justify-content: center;
    align-items: center;
    `,
  COLUMN_CENTER: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const COLOR = {
  MAIN: {
    GREEN: '#1EAA67',
    YELLOW: '#FBC300',
    BLUE: '#3083FF',
    BLACK: '#393939',
    GRAY: '#828282',
    LIGHT_BLACK: '#C8C8C8',
    WHITE: '#FFFFFF',
  },
};

const theme = { WINDOW_SIZE, ALIGN, COLOR };

export default theme;
