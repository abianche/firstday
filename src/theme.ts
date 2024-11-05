"use client";

import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from "./theme/themePrimitives";
import { createTheme } from '@mui/material';

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
