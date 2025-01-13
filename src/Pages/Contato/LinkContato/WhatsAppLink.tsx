import { PropsLinkContato } from "../../../interface/UI";
import { LinkEstilizado, SpanEstilizado } from "./EstilosLinks";

const WhatsAppLink = ({ texto, image }: PropsLinkContato) => {
  const mensagem = 'Olá, gostaria de fazer um orçamento com a NL_NEVES.';
  const numero = '5511977066344'; // substitua pelo número do WhatsApp
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  const handleClick  = () => {
    window.open(link, "_blank");
  }

  return (
    <LinkEstilizado $image={image} onClick={handleClick} >
      <SpanEstilizado>{texto}</SpanEstilizado>
    </LinkEstilizado>
  );
};

export default WhatsAppLink;