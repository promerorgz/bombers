// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Button from "./Button";
// 2. Extend the theme to include custom colors, fonts, etc
export default extendTheme({
  components: {
    Button,
  },
  styles: {
    a: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
  },

  colors: {
    brand: {
      900: "#000",
      800: "#212121",
      400: "#E2E2E2",
      transparent: "#e2e2e2",
    },
    black: {},
  },
});
