import { merge } from "theme-ui";
import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

export default merge(baseTheme, {
  colors: {
    // light mode styles
    text: "#333333",
    background: "#ffffff",
    primary: "#0066cc",
    secondary: "#00cc66",
    heading: "#111111",

    // dark mode styles
    modes: {
      dark: {
        text: "#ffffff",
        background: "#111111",
        primary: "#66ccff",
        secondary: "#66ffcc",
        heading: "#ffffff",
      },
    },
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Merriweather', serif",
    monospace: "Menlo, monospace",
  },
});
