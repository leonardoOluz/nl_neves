import { Imagem } from "../../componentes/Imagem/Imagem"
import { Secao } from "../../componentes/Secao/Secao"
import { SubHeader } from "../../componentes/SubHeader/SubHeader"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Lista } from "../../componentes/Lista/ListaComponente"
import { ItemLista } from "../../componentes/Lista/ItemLista/ItemComponente"
import { FigureComponente } from "../../componentes/FigureComponente/FigureComponente"
import { FigcaptionComponente } from "../../componentes/FigureComponente/FigcaptionComponente/FigcaptionComponente";
import styled from "styled-components"
import { DivisaoConteudo } from "../../componentes/DivisaoConteudo/DivisaoConteudo"
import useUpdateGaleria from "../../hooks/useUpdateGaleria"
import Loader from "../../componentes/Loader/Loader"

const BotaoMaisEstilizado = styled.button`
  background-color: ${({ theme }) => theme.cores.preto};
  color: ${({ theme }) => theme.cores.branco};
  border-radius: 8rem;
  border: 2px solid ${({ theme }) => theme.cores.secundaria};
  padding: 1rem ${({ theme }) => theme.espacamentos.s};
  box-shadow: 10px 14px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  box-sizing: border-box;
  transition: transform 200ms;
  
  &:hover,
  &:active {
    transform: scale(1.05);
  }


@media screen and(min-width: 660px) {
    &:hover,
    &:active{
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.cores.preto};
    background-color: ${({ theme }) => theme.cores.terciario};
  }
}
`;

export const Galeria = () => {
  const { handleClick, textoBtn, galeriaMais } = useUpdateGaleria();

  return (<Secao id="galeria" ariaLabel="galeria">
    <SubHeader>
      <Tipografia componente="h2" variante="h2" texto="Galeria" />
    </SubHeader>

    <Lista flexDirectionMobile="column">
      {galeriaMais.map((item, index) => (
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
    <DivisaoConteudo divTipografia="divGaleria">
      {textoBtn ? <BotaoMaisEstilizado aria-label="botao ver mais" type="button" onClick={handleClick} >
        <Tipografia componente="body" variante="body" texto={textoBtn} />
      </BotaoMaisEstilizado> : <Loader />}
    </DivisaoConteudo>
  </Secao>)
}