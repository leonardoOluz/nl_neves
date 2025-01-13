import styled from "styled-components"

const ListaEstilizada = styled.ul<{ $flexDirection: string }>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.espacamentos.m};

  @media screen and (min-width: 660px){
    flex-direction: row;
  }
`;

interface PropsLista {
  children: React.ReactNode;
  flexDirectionMobile: "column" | "row"
}

export const Lista = ({ children, flexDirectionMobile: flexDirection }: PropsLista) => {
  return (<ListaEstilizada $flexDirection={flexDirection}>{children}</ListaEstilizada>)
}