import { PropsLinkContato } from "../../../interface/UI";
import { LinkEstilizado, SpanEstilizado } from "./EstilosLinks";

export const RedeSocialLink = ({ image, texto, path }: PropsLinkContato) => {
  const handleClick = () => {
    window.open(path, "_blank");
  };
  
  return (<LinkEstilizado $image={image} onClick={handleClick}>
    <SpanEstilizado>{texto}</SpanEstilizado>
  </LinkEstilizado>)
};