import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        backgroundColor: "neutral.50",
        color: "blue.950",
      },
      button: { color: "neutral.900", textTransform: "uppercase" },
    },
  },
  fonts: {
    body: "Inter",
    "h1, h2, h3, h4, h5, h6": "IBM Plex Sans",
  },
  colors: {
    teste: {
      fill: "#a972cb",
      pulse: "#ef6eae",
      close: "#ff7f82",
      raise: "#ffa260",
      up: " #e4cb58",
      slide: "#8fc866",
      offset: "#19bc8b",
    },

    neutral: {
      50: "#F5F4F4",
      100: "#D8D4D4",
      150: "#C5BFBF",
      700: "#152328",
      900: "#1F201D",
    },
    blue: {
      100: "#DCDFF9",
      300: "#B7CCB9",
      750: "#051423",
      950: "#040825",
    },
    green: {
      500: "#1C4A40",
      700: "#233A43",
      900: "#152328",
    },
    red: {
      400: "#C14953",
      500: "#A73942",
    },
    orange: {
      400: "#EEA659",
      500: "#E88821",
    },
    yellow: {
      300: "#FDFD72",
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
          color: "#EDFDFB",
          bgGradient: "linear(to-r, orange.500, #DE7E17)",
          _hover: "",
          _focus: "",
        },
      },
    },
  },
});

export default theme;
