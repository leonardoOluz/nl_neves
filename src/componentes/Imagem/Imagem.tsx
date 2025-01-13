import styled, { css } from "styled-components";

const ShadowBox = css`
  box-shadow: 14px 14px 14px rgba(0, 0, 0, 0.4);
  border-radius: 2.8rem;
`;

const imagemCarrossel = css`
  width: 100%;
`;

const imagemGaleria = css`
  @media screen and (min-width: 660px){
  max-width: 26rem;
    ${ShadowBox}
  }
`;

const imagemServicos = css`
  height: 18.8rem;
  
  @media screen and (min-width: 660px) {
    max-width: 23.5rem;
    ${ShadowBox}
  }
`;

const imagemSobreEmpresa = css` 
  @media screen and (min-width: 660px) {
    ${ShadowBox}
    width: 35rem;
    
  }
`;

const ImagemEstilizada = styled.img<{ $secao?: string }>`
  width: 95%;
  max-height: 35rem;
  object-fit: cover;
  box-sizing: border-box;

  ${({ $secao }) => {
    switch ($secao) {
      case "carrossel":
        return imagemCarrossel;
      case "galeria":
        return imagemGaleria;
      case "servicos":
        return imagemServicos;
      case "sobre-empresa":
        return imagemSobreEmpresa;
      default:
        return null;
    }
  }}
`;

interface PropsImagem {
  src: string;
  alt: string;
  secao?: "sobre-empresa" | "galeria" | "servicos" | "contato" | "carrossel";
};

export const Imagem = ({ src, alt, secao }: PropsImagem) => {
  return (<ImagemEstilizada src={src} alt={alt} $secao={secao} />)
};