import { Link } from "react-router-dom";
import Navibar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Navibar bg="dark" variant="dark">
      <Link to="/">
        <Navibar.Brand>Live Covid Cases</Navibar.Brand>
      </Link>
      <Navibar.Toggle aria-controls="basic-navbar-nav" />
      <Navibar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Link to="/">
          <p className="m-2 text-light">Home</p>
        </Link>
        <Link to="/about">
          <p className="m-2 text-light">About</p>
        </Link>
      </Navibar.Collapse>
    </Navibar>
  );
};

export default Navbar;
