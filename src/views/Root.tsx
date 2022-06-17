import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MaiTemplate/MainTemplate";
import Error404 from "./Error404";
import Form from "./Form";
import Homepage from "./Homepage";

const Root = (): JSX.Element => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
