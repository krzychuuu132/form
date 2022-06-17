import Navigation from "components/organisms/Navigation/Navigation";
import React from "react";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children }): JSX.Element => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
