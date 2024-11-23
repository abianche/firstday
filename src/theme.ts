"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
  },
  colorSchemes: {
    dark: true,
  },
});

export default theme;
