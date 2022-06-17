import React from "react";
import { StyledList, StyledListItem, StyledNavLink } from "./Navigation.styles";

const Navigation = () => {
  return (
    <StyledList>
      <StyledListItem>
        <StyledNavLink to="/">Homepage</StyledNavLink>
        <StyledNavLink to="/form">Formularz</StyledNavLink>
      </StyledListItem>
    </StyledList>
  );
};

export default Navigation;
