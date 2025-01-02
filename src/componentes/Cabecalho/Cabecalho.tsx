import styled from "styled-components";
import { Container } from "./Container/Container";
import { Tipografia } from "../Tipografia/Tipografia";
import { Navegacao } from "./Navegacao/Navegacao";
import { ListaNavegacao } from "./ListaNavegacao/ListaNavegacao";
import { ItemNavegacao } from "./ListaNavegacao/ItemNavegacao/ItemNavegacao";
import { Link } from "./Link/Link";
import { useState } from "react";
import { BotaoMenuSuspenso } from "./BotaoMenuSuspenso/BotaoMenuSuspenso";
import { CgCloseR } from "react-icons/cg";
import { LuSquareMenu } from "react-icons/lu";


const HeaderEstilizado = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.cores.primaria};
  align-items: center;
  justify-content: space-between;
`;


export const Cabecalho = () => {

  const [listaSuspensa, setListaSuspensa] = useState<boolean>(false)

  return (<HeaderEstilizado>
    <Container>
      <Tipografia componente="h1" variante="h1" texto="NL_Neves" />
    </Container>
    <Navegacao>

      <ListaNavegacao>
        <BotaoMenuSuspenso handleClick={() => setListaSuspensa(!listaSuspensa)}>
          {listaSuspensa ? <CgCloseR size={45} /> : <LuSquareMenu size={45} />}
        </BotaoMenuSuspenso>
        {listaSuspensa ? <>Abriu</> : <>Fechou</>}
      </ListaNavegacao>

      <ListaNavegacao listaNavegcao>
        <ItemNavegacao>
          <Link texto="Sobre mim" path="#" />
        </ItemNavegacao>
        <ItemNavegacao>
          <Link texto="Serviços" path="#" />
        </ItemNavegacao>
        <ItemNavegacao>
          <Link texto="Galeria" path="#" />
        </ItemNavegacao>
        <ItemNavegacao>
          <Link path="#" texto="Contato" />
        </ItemNavegacao>
      </ListaNavegacao>

    </Navegacao>
  </HeaderEstilizado>)
}