const color = {
  navy: '#22577a',
  mint: '#38a3a5',
  green: '#57cc99',
  lightGreen: '#80ed99',
  white: '#ffffff',
  black: '#000000',
  warning: '#f63e3e',
  disabled: '#bcbcbc',
  gray: 'rgba(176,176,176,0.39)',
  darkGray: 'rgba(176,176,176,0.74)',
};

const font = {
  size: {
    10: 'font-size: 10px;',
    12: 'font-size: 12px;',
    14: 'font-size: 14px;',
    16: 'font-size: 16px;',
    20: 'font-size: 20px;',
    30: 'font-size: 30px;',
  },
  weight: {
    normal: 'font-weight: 400;',
    thick: 'font-weight: 500;',
    bold: 'font-weight: 700;',
  },
};

const align = {
  flexCenter: `
  display:flex;
  justify-content: center;
  align-items: center;
  `,
  flexCenterColumn: `
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `,
};

const scroll = {
  myPage: `
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar{
    width: 13px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #22577A;
  }
  ::-webkit-scrollbar-track {
    background-color: #D9D9D9;
  }
  `,
  post: `
  overflow: auto;
  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #8C8C8C;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #D9D9D9;
    border-radius: 4px;
  }
  `,
};

const theme = {
  color,
  font,
  align,
  scroll,
};

export default theme;
