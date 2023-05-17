import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Theme } from "./views/styles/themes/defaultTheme";

import { Home } from "./views/pages";

import GlobalStyles from "./views/styles/globalStyles";

import "views/styles/fonts.css";

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
