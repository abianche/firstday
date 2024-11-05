"use client";

import { createTheme } from "@mui/material/styles";
import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from "./theme/themePrimitives";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
    // cssVarPrefix: 'template',
  },
  colorSchemes,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
