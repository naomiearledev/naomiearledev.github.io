import Link from "./Link"
import "../assets/css/components/Header.css"

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header_nav-links">
        <Link href="#about" text="about" />
        <Link href="#work" text="work" />
        <Link href="#contact" text="contact" />
      </div>
    </div>
  )
}

export default Header