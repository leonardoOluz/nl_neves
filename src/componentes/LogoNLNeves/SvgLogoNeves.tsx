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
        fill: "#b00",
      }}
    />
    <text
      x={37.666}
      y={95.312}
      style={{
        fill: "#fff",
        fontFamily: "Arbutus",
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
    <path
      bbox="star 535.329 72.243 27.852 24.953 0.38 10 1@90f5fe3a"
      d="m535.329 47.29 3.271 15.935 13.1-11.169-7.809 14.614 17.927-2.138-15.905 7.711 15.905 7.711-17.927-2.138L551.7 92.43l-13.1-11.169-3.271 15.935-3.271-15.935-13.1 11.169 7.809-14.614-17.927 2.138 15.905-7.711-15.905-7.711 17.927 2.138-7.809-14.614 13.1 11.169Z"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
    />
    <path
      bbox="star 501.917 43.523 19.837 22.599 0.38 10 1@372ed329"
      d="m501.917 20.924 2.329 14.432 9.331-10.116-5.562 13.235 12.768-1.935-11.328 6.983 11.328 6.983-12.768-1.935 5.562 13.235-9.331-10.116-2.329 14.432-2.329-14.432-9.331 10.116 5.562-13.235-12.768 1.935 11.328-6.983-11.328-6.983 12.768 1.935-5.562-13.235 9.331 10.116Z"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
    />
    <path
      bbox="star 495.945 81.659 13.558 15.537 0.38 10 1@72e59627"
      d="m495.945 66.122 1.592 9.922 6.377-6.955-3.801 9.1 8.726-1.331-7.742 4.801 7.742 4.801-8.726-1.331 3.801 9.1-6.377-6.955-1.592 9.922-1.592-9.922-6.377 6.955 3.801-9.1-8.726 1.331 7.742-4.801-7.742-4.801 8.726 1.331-3.801-9.1 6.377 6.955Z"
      style={{
        stroke: "#000",
        fill: "#fff",
      }}
    />
  </SvgEstilizado>
)