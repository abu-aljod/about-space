import './NavBar.css'

import { NavLink } from "react-router-dom";

function NavBar({ handleClick }) {

  return (
    <nav>
        <NavLink onClick={() => handleClick("/")} to="/">Home</NavLink>
        <NavLink onClick={() => handleClick("/planets")} to="/planets">Planets</NavLink>
        <NavLink onClick={() => handleClick("/stars")} to="/stars">Stars</NavLink>
        <NavLink onClick={() => handleClick("/galaxies")} to="/galaxies">Galaxies</NavLink>
    </nav>
  )
}

export default NavBar;