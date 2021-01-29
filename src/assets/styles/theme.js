const sizes = {
  mobile: "375px",
  lg_mobile: "500px",
  tablet: "850px",
  desktop: "1440px",
};

const theme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    cyan: "hsl(180, 66%, 49%)",
    violet: "hsl(257, 27%, 26%)",
    red: "hsl(0, 87%, 67%)",
    grey: "hsl(0, 0%, 75%)",
    grey_light: "#f0f0f0",
    grey_violet: "hsl(257, 7%, 63%)",
    dark_violet: "hsl(260, 8%, 14%)",
    dark_blue: "hsl(255, 11%, 22%)",
  },

  fonts: {
    text: "'Poppins', sans-serif",
  },

  sizes: {
    mobile: sizes.mobile,
    lg_mobile: sizes.lg_mobile,
    tablet: sizes.tablet,
    desktop: sizes.desktop,
  },

  devices: {
    mobile: `(min-width: ${sizes.mobile})`,
    lg_mobile: `(min-width: ${sizes.lg_mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`,
  },
};

export default theme;
