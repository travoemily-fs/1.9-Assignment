import { merge } from "theme-ui";
import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

export default merge(baseTheme, {
  colors: {
    // light mode styles
    text: "	#686868",
    background: " #ffffff",
    primary: " #38383",
    secondary: "	#74cbab",
    heading: "	#f486a1",
    divide: "	#fce0ec",
    toggleIcon: " #f486a1",

    // dark mode styles
    modes: {
      dark: {
        text: " #ffffff",
        background: " #111111",
        primary: " #F28F3B",
        secondary: "	#d6f2e3",
        heading: " #f486a1",
        divide: "	#fce0ec",
        toggleIcon: "	#ffc9ce",
      },
    },
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    monospace: "Menlo, monospace",
  },
});
