import { Imagem } from "../../componentes/Imagem/Imagem";
import { Secao } from "../../componentes/Secao/Secao";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import neves from "../../assets/img/carrossel/neves.avif"
import { SubHeader } from "../../componentes/SubHeader/SubHeader";
import { DivisaoConteudo } from "../../componentes/DivisaoConteudo/DivisaoConteudo";

export const SobreEmpresa = () => {
  return (<Secao id="sobre-empresa" ariaLabel="sobre a empresa">
    <SubHeader>
      <Tipografia componente="h2" variante="h2" texto="Sobre a Nossa Empresa" />
    </SubHeader>

    <DivisaoConteudo >

      <Imagem alt="Nelinhos neves" src={neves} secao="sobre-empresa" />

      <DivisaoConteudo divTipografia="divTipografia" >

        <Tipografia componente="body" variante="body" texto="Olá sou Nelinho Neves, fundador da NL_NEVES." />
        <Tipografia componente="body" variante="body" texto="A nossa empresa oferece solução completa em hidráulica.
Com 3 anos de experiência no mercado, a NL_NEVES se destaca na prestação de serviços hidráulicos de alta qualidade para residências. Nossa equipe especializada realiza instalações e manutenções de diversos tipos de sistemas hidráulicos, garantindo o bom funcionamento e a durabilidade da sua rede." />
        <Tipografia componente="body" variante="body" texto="Soluções personalizadas para suas necessidades Atendimento rápido e eficiente. Sua casa merece o melhor." />
      </DivisaoConteudo>

    </DivisaoConteudo>
  </Secao>)
};