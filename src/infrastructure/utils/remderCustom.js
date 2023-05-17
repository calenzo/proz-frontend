import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider } from "styled-components";
import { Theme } from "../../views/styles/themes/defaultTheme";

export const renderCustom = (Element) => {
  render(<ThemeProvider theme={Theme}>{Element}</ThemeProvider>);
};
