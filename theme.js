const Palette = {
  bg: {
    red: "#D9263B",
    black: "#000000",
    white: "#FBF8F8",
    offRed: "E17384",
  },
  text: {
    white: "#FBF8F8",
    black: "#000000",
    red: "#D9263B",
    offRed: "#9194a1",
    grey: "#A0AEC0",
  },
};

const theme = {
  fontSizes: [
    "14px", // 0
    "16px", // 1
    "18px", // 2
    "22px", // 3
    "26px", // 4
    "32px", // 5
    "40px", // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
};

export const defaultTheme = { ...theme, ...Palette };
