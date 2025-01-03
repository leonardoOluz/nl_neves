import styled, { css } from "styled-components";

const ListaSuspensaEstilizada = css<{ $isopen?: boolean, $dropdown?: boolean }>`
  position: fixed;
  width: 100%;
  top: 97px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: -1;
  background-color: ${({ theme }) => theme.cores.secundaria};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  transition: transform 1.2s ease-in-out;

  ${({ $isopen }) => $isopen ? "transform: translateY(0);" : "transform: translateY(-150%);"}
`;

const ListaNavegacaoEstilizada = css`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
`

const ListaEstilizada = styled.ul<{ $dropdown?: boolean, $isopen?: boolean }>`
  ${({ $dropdown }) => $dropdown ? ListaSuspensaEstilizada : ListaNavegacaoEstilizada}
`;

interface PropsListaNavegacao {
  children: React.ReactNode;
  isOpen?: boolean;
  dropDown?: boolean
}

export const ListaNavegacao = ({ children, isOpen, dropDown }: PropsListaNavegacao) => {
  return (<ListaEstilizada $dropdown={dropDown} $isopen={isOpen}>
    {children}
  </ListaEstilizada>)
}