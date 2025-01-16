import styled from "styled-components";
import { Navegacao } from "./Navegacao/Navegacao";
import { ListaNavegacao } from "./ListaNavegacao/ListaNavegacao";
import { useEffect, useState } from "react";
import { BotaoMenuSuspenso } from "./BotaoMenuSuspenso/BotaoMenuSuspenso";
import { CgCloseR } from "react-icons/cg";
import { LuSquareMenu } from "react-icons/lu";
import { useHandleResize } from "../../hooks/useHandleResize";
import { ContainerSuspenso } from "./ContainerSuspensa/ContainerSuspensa";
import { SvgLogoNeves } from "../LogoNLNeves/SvgLogoNeves";

const HeaderEstilizado = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.cores.preto};
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 2;
  margin-bottom: ${({ theme }) => theme.espacamentos.xxs};
  box-sizing: border-box;

  @media screen and (min-width: 660px){
    background-color: ${({ theme }) => theme.cores.primaria};
  }
`;

export const Cabecalho = () => {
  const [listaSuspensa, setListaSuspensa] = useState<boolean>(false);
  const [btnSuspensa, setBtnSuspensa] = useState<boolean>(false);
  const { width } = useHandleResize();

  useEffect(() => {
    if (width < 660) {
      setBtnSuspensa(true)
      return
    }
    if (width >= 660) {
      setBtnSuspensa(false)
      setListaSuspensa(false)
      return
    }
  }, [width])

  return (<HeaderEstilizado id="home">
    <SvgLogoNeves typeLogo="cabecalho" />
    {listaSuspensa && <ContainerSuspenso handleClick={() => setListaSuspensa(!listaSuspensa)} />}

    {btnSuspensa ? (
      <Navegacao isSuspenso={btnSuspensa} isOpen={listaSuspensa}>
        <ListaNavegacao dropDown listaSuspensa={() => setListaSuspensa(!listaSuspensa)} />
      </Navegacao>
    ) : (
      <Navegacao>
        <ListaNavegacao />
      </Navegacao>
    )}

    {btnSuspensa ? (
      <BotaoMenuSuspenso
        handleClick={() => setListaSuspensa(!listaSuspensa)}
        ariaLabel={listaSuspensa ? "Fechar menu" : "Abrir menu"}
      >
        {listaSuspensa ? <CgCloseR size={45} style={{ boxSizing: "border-box" }} /> :
          <LuSquareMenu size={45} style={{ boxSizing: "border-box" }} />
        }
      </BotaoMenuSuspenso>
    ) : <></>}

  </HeaderEstilizado>)
};