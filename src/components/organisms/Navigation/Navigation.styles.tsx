import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 2rem 3rem;
  color: black;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.05em;
  will-change: color;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: red;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 5rem;
`;

const StyledListItem = styled.li``;

export { StyledNavLink, StyledList, StyledListItem };
