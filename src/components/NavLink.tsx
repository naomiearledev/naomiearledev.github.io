import "../assets/css/components/NavLink.css"

type NavLinkProps = {
  text: string,
  selector: string,
  className: "nav-link" | "back-to-top"
}

const NavLink = ({ text, selector, className }: NavLinkProps) => {
  const handleClick = () => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  )
}

export default NavLink