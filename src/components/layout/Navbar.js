import React from "react";
import Navibar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navibar bg="dark" variant="dark">
      <Link to="/">
        <Navibar.Brand>Live Covid Cases</Navibar.Brand>
      </Link>
    </Navibar>
  );
};

export default Navbar;
