import styled from "styled-components"

const NavegacaoEstilizada = styled.nav`
  width: 50%;
  text-align: center;
`;

interface PropsNavegacao {
  children: React.ReactNode
}

export const Navegacao = ({ children }: PropsNavegacao) => {
  return (<NavegacaoEstilizada>{children}</NavegacaoEstilizada>)
}