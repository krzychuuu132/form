import Navigation from "components/organisms/Navigation/Navigation";
import React from "react";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default MainTemplate;
