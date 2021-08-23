import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        backgroundColor: "neutral.900",
        color: "neutral.100",
      },
      button: { color: "neutral.900", textTransform: "uppercase" },
    },
  },
  fonts: {
    body: "Inter",
    "h1, h2, h3, h4, h5, h6": "IBM Plex Sans",
  },
  colors: {
    neutral: {
      50: "#FBF9EF",
      100: "#E9F3E2",
      900: "#1F201D",
    },
    blue: {
      100: "#DCDFF9",
      300: "#B7CCB9",
      750: "#051423",
      950: "#040825",
    },
    purple: {
      500: "#B86CE0",
    },
  },

  textStyles: {
    h1: {
      fontSize: "40px",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          color: "#EEF6FC",
          backgroundColor: "purple.500",
        },
      },
    },
  },
});

export default theme;
