import theme from '@/theme';

export const generateCSSForID = (id, color) => `
  .highlight.id-${id} abbr {
    border: 2px solid ${color} !important;
    background-color: ${color};
    color: white;
    font-size: 22px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    ${theme.ALIGN.COLUMN_CENTER}

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
      font-size: 18px;
    }
  }

  .highlight.id-${id}:after,
  .highlight.id-${id}::before {
    content: '';
    border: 1px solid ${color};
    position: absolute;
    width: 10%;

  }

  .highlight.id-${id}:after {
    right: 0;
  }

  .highlight.id-${id}::before {
    left: 0;
  }
`;

const greenColors = [
  '#6195A0', // Teal Blue
  '#83AF8F', // Sage Green
  '#FF9B73', // Apricot
  '#FF7D8D', // Coral Pink
  '#FF6B4E', // Sunset Orange
  '#769BB2', // Periwinkle Blue
  '#FFC67E', // Light Apricot
  '#6097C1', // Steel Blue
  '#FF5A73', // Watermelon
  '#B8A77A', // Dusty Olive
];

export const getRandomGreenColor = () => {
  const randomIndex = Math.floor(Math.random() * greenColors.length);
  return greenColors[randomIndex];
};

export const generateCSSForIDs = (startID, endID) => {
  let css = '';

  for (let id = startID; id <= endID; id++) {
    const randomColor = getRandomGreenColor();
    css += generateCSSForID(id, randomColor);
  }

  return css;
};

// export const getRandomGreenColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#00';
//   for (let i = 0; i < 4; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
