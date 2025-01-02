import { Link } from "../Link/Link"
import { ItemNavegacao } from "../ListaNavegacao/ItemNavegacao/ItemNavegacao"


export const ListaSuspensa = () => {
  return (<>
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
  </>)
}