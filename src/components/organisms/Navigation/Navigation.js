import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <ul>
      <li>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/form">Formularz</NavLink>
      </li>
    </ul>
  );
};

Navigation.propTypes = {};

export default Navigation;
