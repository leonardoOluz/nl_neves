import styled from "styled-components";
import { Container } from "./Container/Container";
import { Tipografia } from "../Tipografia/Tipografia";
import { Navegacao } from "./Navegacao/Navegacao";
import { ListaNavegacao } from "./ListaNavegacao/ListaNavegacao";
import { ItemNavegacao } from "./ListaNavegacao/ItemNavegacao/ItemNavegacao";
import { Link } from "./Link/Link";
import { useEffect, useState } from "react";
import { BotaoMenuSuspenso } from "./BotaoMenuSuspenso/BotaoMenuSuspenso";
import { CgCloseR } from "react-icons/cg";
import { LuSquareMenu } from "react-icons/lu";
import { useHandleResize } from "../../hooks/useHandleResize";
import { ContainerSuspenso } from "./ContainerSuspensa/ContainerSuspensa";


const HeaderEstilizado = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.cores.primaria};
  align-items: center;
  justify-content: space-between;
`;


export const Cabecalho = () => {
  const [listaSuspensa, setListaSuspensa] = useState<boolean>(false);
  const [btnSuspensa, setBtnSuspensa] = useState<boolean>(false);
  const { width } = useHandleResize();

  useEffect(() => {
    if (width < 660) {
      setBtnSuspensa(true)
    } else {
      setBtnSuspensa(false)
      setListaSuspensa(false)
    }
  }, [width])

  return (<HeaderEstilizado>
    <Container>
      <Tipografia componente="h1" variante="h1" texto="NL_Neves" />
    </Container>
    <Navegacao>
      {btnSuspensa ? (<>
        {listaSuspensa && <ContainerSuspenso handleClick={() => setListaSuspensa(!listaSuspensa)} />}
        <BotaoMenuSuspenso
          handleClick={() => setListaSuspensa(!listaSuspensa)}
          ariaLabel={listaSuspensa ? "Fechar menu" : "Abrir menu"}
        >
          {listaSuspensa ? <CgCloseR size={45} /> : <LuSquareMenu size={45} />}
        </BotaoMenuSuspenso>
        <ListaNavegacao dropDown isOpen={listaSuspensa}>
          <ItemNavegacao>
            <Link texto="Sobre mim" path="#1" handleClick={() => setListaSuspensa(!listaSuspensa)} />
          </ItemNavegacao>
          <ItemNavegacao>
            <Link texto="Serviços" path="#2" handleClick={() => setListaSuspensa(!listaSuspensa)} />
          </ItemNavegacao>
          <ItemNavegacao>
            <Link texto="Galeria" path="#3" handleClick={() => setListaSuspensa(!listaSuspensa)} />
          </ItemNavegacao>
          <ItemNavegacao>
            <Link texto="Contato" path="#4" handleClick={() => setListaSuspensa(!listaSuspensa)} />
          </ItemNavegacao>
        </ListaNavegacao>
      </>
      ) : (
        <ListaNavegacao>
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
      )}
    </Navegacao>
  </HeaderEstilizado>)
}