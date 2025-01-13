import { Link } from 'react-scroll';

interface PropsLink {
  texto: string;
  path: string;
  handleClick?: () => void
}

export const Links = ({ texto, path = "#", handleClick }: PropsLink) => {

  return (<Link
    activeClass="active"
    to={path}
    smooth={true}
    duration={1000}
    onClick={handleClick}
    className="link"
  >
    {texto}
  </Link>)
}