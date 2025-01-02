import styled from "styled-components"

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.espacamentos.m};
  
  &.listaNavegacao{
    display: none;
  }


  @media screen and (min-width: 660px){
    &.listaNavegacao{
      display: flex;
    }

    &.listaMenu{
      display: none;
    }
  }

`;

interface PropsListaNavegacao {
  children: React.ReactNode;
  listaNavegcao?: boolean;
}

export const ListaNavegacao = ({ children, listaNavegcao = false }: PropsListaNavegacao) => {
  return (<ListaEstilizada className={listaNavegcao ? "listaNavegacao" : "listaMenu"}>
    {children}
  </ListaEstilizada>)
}