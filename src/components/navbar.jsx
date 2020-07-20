import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar-dark bg-primary">
      <a
        className="navbar-brand"
        href="https://github.com/anandboreda/counter.git"
      >
        &nbsp; Total items &nbsp;
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
