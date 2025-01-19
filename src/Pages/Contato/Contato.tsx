import { Secao } from "../../componentes/Secao/Secao";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { RedeSocialLink } from "./LinkContato/RedeSocialLink";
import WhatsAppLink from "./LinkContato/WhatsAppLink";
import { SubHeader } from "../../componentes/SubHeader/SubHeader";
import { Lista } from "../../componentes/Lista/ListaComponente";
import { ItemLista } from "../../componentes/Lista/ItemLista/ItemComponente";
import { DivisaoConteudo } from "../../componentes/DivisaoConteudo/DivisaoConteudo";
import imgWhatsApp from "../../assets/img/redes_sociais/whatsapp.png";
import { redesSociais } from "../../componentes/ObjetoImagens/ObjetoImagens";

export const Contato = () => {
  return (<Secao id="contato" secao ariaLabel="Contato e redes sociais">
    <SubHeader>
      <Tipografia componente="h2" variante="h2" texto="Entre em contato conosco" />
      <Tipografia componente="body" variante="h3" texto="Sua casa ou empresa precisa de um cuidado especial? Conte com a NL_NEVES. Atendemos toda a Zona Leste." />
    </SubHeader>
    <DivisaoConteudo divTipografia="divContato">

      <DivisaoConteudo divTipografia="divContato">
        <Tipografia componente="body" variante="body" texto="Você pode entrar em contato conosco clicando no icone do whatsapp" />
        <WhatsAppLink
          image={imgWhatsApp}
          texto="Imagem do icone do whatsApp" />
      </DivisaoConteudo>


      <DivisaoConteudo divTipografia="divContato">

        <Tipografia componente="body" variante="body" texto="Verifique nossos serviços nas redes sociais" />

        <Lista flexDirectionMobile="row">
          {redesSociais.map((item, index) => (
            <ItemLista key={index}>
              <RedeSocialLink
                image={item.img}
                texto={item.alt}
                path={item.path} />
            </ItemLista>
          ))}
        </Lista>

      </DivisaoConteudo>

    </DivisaoConteudo>
  </Secao>)
}