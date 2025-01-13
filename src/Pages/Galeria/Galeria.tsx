import { Imagem } from "../../componentes/Imagem/Imagem"
import { Secao } from "../../componentes/Secao/Secao"
import { SubHeader } from "../../componentes/SubHeader/SubHeader"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Lista } from "../../componentes/Lista/ListaComponente"
import { ItemLista } from "../../componentes/Lista/ItemLista/ItemComponente"
import { FigureComponente } from "../../componentes/FigureComponente/FigureComponente"
import { FigcaptionComponente } from "../../componentes/FigureComponente/FigcaptionComponente/FigcaptionComponente";
import { galeria } from "../../componentes/ObjetoImagens/ObjetoImagens"
export const Galeria = () => {
  return (<Secao id="galeria" ariaLabel="galeria">
    <SubHeader>
      <Tipografia componente="h2" variante="h2" texto="Galeria" />
    </SubHeader>

    <Lista flexDirectionMobile="column">
      {galeria.map((item, index) => (
        <ItemLista key={index}>
          <FigureComponente>
            <Imagem src={item.img} alt={item.alt} secao="galeria" />
            <FigcaptionComponente>
              <Tipografia componente="h3" variante="h3" texto={item.titulo!} />
              <Tipografia componente="body" variante="body" texto={item.texto!} />
            </FigcaptionComponente>
          </FigureComponente>
        </ItemLista>
      ))}
    </Lista>
  </Secao>)
}