import "../assets/css/components/Link.css"

type LinkProps = {
  href: string,
  text: string
}

const Link = ({ href, text }: LinkProps) => {
  return (
    <a href={href} className="link">{text}</a>
  )
}

export default Link