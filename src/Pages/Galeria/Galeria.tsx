import { Imagem } from "../../componentes/Imagem/Imagem"
import { Secao } from "../../componentes/Secao/Secao"
import { SubHeader } from "../../componentes/SubHeader/SubHeader"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Lista } from "../../componentes/Lista/ListaComponente"
import { ItemLista } from "../../componentes/Lista/ItemLista/ItemComponente"
import { FigureComponente } from "../../componentes/FigureComponente/FigureComponente"
import { FigcaptionComponente } from "../../componentes/FigureComponente/FigcaptionComponente/FigcaptionComponente";
import { galeria } from "../../componentes/ObjetoImagens/ObjetoImagens"
import { useEffect, useState } from "react"
import { IObjetoImagens } from "../../interface/UI"
import styled from "styled-components"
import { DivisaoConteudo } from "../../componentes/DivisaoConteudo/DivisaoConteudo"

const BotaoMaisEstilizado = styled.button`
  background-color: ${({ theme }) => theme.cores.preto};
  color: ${({ theme }) => theme.cores.branco};
  border-radius: 8rem;
  border: 2px solid ${({ theme }) => theme.cores.secundaria};
  padding: ${({ theme }) => theme.espacamentos.s} ${({ theme }) => theme.espacamentos.m};
  box-shadow: 10px 14px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  box-sizing: border-box;
  transition: transform 200ms;

  &:hover{
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.cores.preto};
    background-color: ${({ theme }) => theme.cores.terciario};
  }
`;

export const Galeria = () => {
  const [textoBtn, setTextoBtn] = useState("Ver mais")
  const [galeriaMais, setGaleriaMais] = useState<IObjetoImagens[]>(galeria.slice(0, 4))

  useEffect(() => {
    if (galeriaMais.length < galeria.length) {
      setTextoBtn("Ver mais")
    } else {
      setTextoBtn("Ver menos")
    }
  }, [galeriaMais])

  const handleClick = () => {
    if (galeriaMais.length < galeria.length) {
      setGaleriaMais((prev) => {
        return galeria.slice(0, prev.length + 2)
      })
    } else {
      setGaleriaMais(galeria.slice(0, 4))
    }
  }

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
      <BotaoMaisEstilizado type="button" onClick={handleClick} >
        <Tipografia componente="body" variante="h2" texto={textoBtn} />
      </BotaoMaisEstilizado>
    </DivisaoConteudo>
  </Secao>)
}