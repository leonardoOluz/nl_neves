import { Imagem } from "../../componentes/Imagem/Imagem";
import { Secao } from "../../componentes/Secao/Secao"
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { SubHeader } from "../../componentes/SubHeader/SubHeader";
import { Lista } from "../../componentes/Lista/ListaComponente";
import { ItemLista } from "../../componentes/Lista/ItemLista/ItemComponente";
import { FigureComponente } from "../../componentes/FigureComponente/FigureComponente";
import { FigcaptionComponente } from "../../componentes/FigureComponente/FigcaptionComponente/FigcaptionComponente";
import { servicos } from "../../componentes/ObjetoImagens/ObjetoImagens";

export const Servicos = () => {
  return (<Secao id="servicos" ariaLabel="seviços oferecidos">
    <SubHeader>
      <Tipografia componente="h2" variante="h2" texto="Serviços" />
    </SubHeader>
    <Lista flexDirectionMobile="column">
      {servicos.map((item, index) => (
        <ItemLista key={index}>
          <FigureComponente>
            <Imagem secao="servicos" src={item.img} alt={item.alt} />
            <FigcaptionComponente>
              <Tipografia
                componente="body"
                variante="body"
                texto={item.texto!} />
            </FigcaptionComponente>
          </FigureComponente>
        </ItemLista>
      ))}
    </Lista>
  </Secao>)
};