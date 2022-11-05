import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>Code Blog</h1>
      <div className="Navbar-icons">
        <NavLink to="/result" className="icons" end>
          <FaHome/>
        </NavLink>
        <NavLink to="/" className="icons" end>
          <IoMdAdd />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
