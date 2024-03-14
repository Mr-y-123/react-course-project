import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
 const extendThemes = extendTheme({ breakpoints });
 export default extendThemes