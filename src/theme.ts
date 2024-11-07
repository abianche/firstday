"use client";

import { colorSchemes, typography, shape } from "./theme/themePrimitives";
import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
  },
  colorSchemes,
  typography,
  shape,
});

export default theme;
