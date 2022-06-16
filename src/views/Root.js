import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate";
import Error404 from "./Error404";
import Form from "./Form";
import Homepage from "./Homepage";

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </MainTemplate>
    </Router>
  );
};

export default Root;
