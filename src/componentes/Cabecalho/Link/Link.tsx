import styled from "styled-components";

const LinkEstilizado = styled.a`
    font-size: ${({ theme }) => theme.espacamentos.s};
    line-height: ${({ theme }) => theme.espacamentos.xl};
    font-weight: 600;
    box-sizing: border-box;

  @media screen and (min-width: 1024px){
    font-size: ${({ theme }) => theme.espacamentos.m};
  }
`;

interface PropsLink {
  texto: string;
  path: string;
}

export const Link = ({ texto, path = "#" }: PropsLink) => {
  return (<LinkEstilizado href={path} >
    {texto}
  </LinkEstilizado>)
}