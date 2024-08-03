import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h3 className="title">Admin Dashboard</h3>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-employee" className="nav-link">
            Add employee
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
