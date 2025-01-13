import styled, { css } from "styled-components";
import { ItemNavegacao } from "./ItemNavegacao/ItemNavegacao";
import { Links } from "../Link/Link";

const ListaSuspensaEstilizada = css<{ $isopen?: boolean, $dropdown?: boolean }>`
  display: flex;
  width: 100%;
  padding-top: .5rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.cores.preto};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
`;

const ListaNavegacaoEstilizada = css`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ListaEstilizada = styled.ul<{ $dropdown?: boolean, $isopen?: boolean }>`
  ${({ $dropdown }) => $dropdown ? ListaSuspensaEstilizada : ListaNavegacaoEstilizada}
`;

interface PropsListaNavegacao {
  isOpen?: boolean;
  dropDown?: boolean;
  listaSuspensa?: () => void
};

export const ListaNavegacao = ({ isOpen, dropDown, listaSuspensa }: PropsListaNavegacao) => {
  return (<ListaEstilizada $dropdown={dropDown} $isopen={isOpen}>
    <ItemNavegacao>
      <Links texto="Sobre a Empresa" path="sobre-empresa" handleClick={listaSuspensa} />
    </ItemNavegacao>
    <ItemNavegacao>
      <Links texto="Serviços" path="servicos" handleClick={listaSuspensa} />
    </ItemNavegacao>
    <ItemNavegacao>
      <Links texto="Galeria" path="galeria" handleClick={listaSuspensa} />
    </ItemNavegacao>
    <ItemNavegacao>
      <Links texto="Contato" path="contato" handleClick={listaSuspensa} />
    </ItemNavegacao>
  </ListaEstilizada>)
}