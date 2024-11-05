"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    // colorSchemeSelector: "data-mui-color-scheme",
    // cssVarPrefix: 'template',
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
