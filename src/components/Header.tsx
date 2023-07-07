import "../assets/css/components/Header.css"

import NavLink from "./NavLink"

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header_nav-links">
        <NavLink text="about" selector="#about" className="nav-link" />
        <NavLink text="work" selector="#work" className="nav-link" />
        <NavLink text="contact" selector="#contact" className="nav-link" />
      </div>
    </div>
  )
}

export default Header