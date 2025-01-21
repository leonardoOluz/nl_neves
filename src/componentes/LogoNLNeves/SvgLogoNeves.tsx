import styled, { css } from "styled-components"

const LogoCabecalhoEstilizado = css`
  width: 80%;
  min-width: 27rem;
  background-color: ${({ theme }) => theme.cores.terciario};
  z-index: 1;

  @media screen and (min-width: 660px){
    width: 35rem;
  }
  @media screen and (min-width: 845px){
    width: 45rem;
  }
`;

const LogoRodapeEstilizado = css`
  
  @media screen and (min-width: 660px){
    max-width: 60rem;
    height: 10rem;
  }
`;

const SvgEstilizado = styled.svg<{ $typeLogo: string }>`
  ${({ $typeLogo }) => {
    switch ($typeLogo) {
      case "cabecalho":
        return LogoCabecalhoEstilizado
      case "rodape":
        return LogoRodapeEstilizado
      default:
        break;
    }
  }}
`;

interface PropsSvgLogoNeves {
  typeLogo: "cabecalho" | "rodape";
}

export const SvgLogoNeves = ({ typeLogo }: PropsSvgLogoNeves) => (
  <SvgEstilizado
    $typeLogo={typeLogo}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="https://boxy-svg.com"
    viewBox="0 0 598.87 146.16"
  >
    <path
      d="M0 0h598.87v146.16H0z"
      style={{
        stroke: "#000",
        fill: "#BB0000",
      }}
    />
    <text
      x={45.666}
      y={115.312}
      style={{
        fill: "#fff",
        fontFamily: "Bradley Hand ITC",
        fontWeight: "bold",
        fontSize: 64,
        whiteSpace: "pre",
      }}
      transform="matrix(.92644 -.00082 0 1 -22.653 -22.386)"
    >
      {"NL_NEVES"}
    </text>
    <defs>
      <style>
        {
          "@import url(https://fonts.googleapis.com/css2?family=Arbutus%3Aital%2Cwght%400%2C400&display=swap);"
        }
      </style>
    </defs>
    
  </SvgEstilizado>
)