import { IObjetoImagens } from "../../interface/UI";
// Galeria
import ralo from "../../assets/img/galeria/ralo.avif";
import caixaGordura from "../../assets/img/galeria/caixa-gordura.avif";
import cavalete from "../../assets/img/galeria/instalacaoCavaletes.avif";
import ceramica from "../../assets/img/galeria/instalacaoCeramica.avif";
import tubulacaoEsgoto from "../../assets/img/galeria/instalacaoEsgotoWC.avif";
import pontoBebedor from "../../assets/img/galeria/instalacaoPontoAguaEsgotoBebedor.avif";
import esgoto from "../../assets/img/galeria/instalacaoPontoEsgoto.avif";
import pressurizadora from "../../assets/img/galeria/instalacaoPressurizador.avif";
import aguaEsgoto from "../../assets/img/galeria/instalacaoRaloWC.avif";
import calha from "../../assets/img/galeria/concertoCalha.avif";
import tubulacaoRegistrosOne from "../../assets/img/galeria/instalacaoTubulacaoRegistroValvulas.avif";
import tubulacaoRegistrosTwo from "../../assets/img/galeria/InstalacaoRegistroTubulacao.avif";
import raloGaragemOne  from "../../assets/img/galeria/raloGaragem.avif";
import raloGaragemTwo  from "../../assets/img/galeria/raloGaragem2.avif";
import trocaTubulacao  from "../../assets/img/galeria/trocaTubulacaoEsgoto.avif";
import trocaTubulacaoCaixa  from "../../assets/img/galeria/tubulacaoEsgotoCaixa.avif";
import trocaTubulacaoCozinhaOne  from "../../assets/img/galeria/tubulacaoEsgotoCozinha.avif";
import trocaTubulacaoCozinhaTwo  from "../../assets/img/galeria/tubulacaoEsgotoCozinha2.avif";
import tubulacaoTorneiras  from "../../assets/img/galeria/tubulacaoTorneirasPia.avif";

// Servicos
import imgTorneira from "../../assets/img/servicos/trocaTorneira.avif";
import imgSifao from "../../assets/img/servicos/TrocaSifao.avif";
import imgFlexivel from "../../assets/img/servicos/trocaFlexivel.avif";
import imgBomba from "../../assets/img/servicos/instalacaoBomba.avif";
import imgPressurizada from "../../assets/img/servicos/instalacaoPressurizada.avif";
import imgCaixaGordura from "../../assets/img/servicos/instalacaoCaixaGordura.avif";
// Sobre Empresa
import imagemTwo from "../../assets/img/carrossel/nlnevesTwo.avif";
import imagemThree from "../../assets/img/carrossel/nlnevesthree.avif";
import imagemFour from "../../assets/img/carrossel/nlnevesfour.avif";
import imagemFerramentas from "../../assets/img/carrossel/MaletasFerramentas.avif";
// Contato
import imgInstagram from "../../assets/img/redes_sociais/instagram.png";
import imgFacebook from "../../assets/img/redes_sociais/imgFacebook.png";
import imgTiktok from "../../assets/img/redes_sociais/tiktok.png";
import imgYoutube from "../../assets/img/redes_sociais/youtube.png";

export const galeria: IObjetoImagens[] = [
  {
    img: ralo,
    alt: "imagem de um ralo da marca amanco no chão",
    titulo: "TROCA DE RALO NO WC.",
    texto: "Serviço de troca de ralo no banheiro de uma residência",
  },
  {
    img: caixaGordura,
    alt: "caixa de gordura em manutenção",
    titulo: "MANUTENÇÃO EM CAIXA DE GORDURA.",
    texto: "Serviço de reparo em uma caixa de gordura de um restaunte",
  },
  {
    img: cavalete,
    alt: "rapaz instando cavaletes para medidor de agua na entrada de um portão",
    titulo: "INSTALAÇÃO DE CAVALETES D'AGUA.",
    texto: "Serviço de instalação de cavaletes para medidor de agua na entrada de um portão",
  },
  {
    img: ceramica,
    alt: "rapaz de camisa vermelha e calça cinza com um objeto não identificado na mão de frente a janela com uma parede faltando revestimento.",
    titulo: "REPOSIÇÃO DE PEÇAS DE CERÂMICA.",
    texto: "Serviço de revestimento de cermica na cozinha de uma residência.",
  },
  {
    img: tubulacaoEsgoto,
    alt: "Tubulação exposta em um contra-piso de um WC em construção.",
    titulo: "INSTALAÇÃO DE ESGOTO EM WC.",
    texto: "Serviço de instalação de esgoto para um WC em construção de um residência.",
  },
  {
    img: pontoBebedor,
    alt: "Parede branco com aberturas e dentro das aberturas passado os canos de agua e esgoto para instalação de dois pontos para bebedor e abaixo um ponto de esgoto.",
    titulo: "INFRA-ESTRUTURA PARA BEBEDOR.",
    texto: "Serviço de instalação de dois pontos de agua para os bebedores com um ponto de esgoto.",
  },
  {
    img: esgoto,
    alt: "contra-piso aberto com tubulações de esgoto interligadas.",
    titulo: "INSTALAÇÃO DE ESGOTO PARA COZINHA.",
    texto: "Instalação do esgoto para a pia da cozinha em um residência.",
  },
  {
    img: pressurizadora,
    alt: "uma bomba instalada junto ao cano de pvc por cima de uma laje.",
    titulo: "BOMBA DE PRESSURIZAÇÃO DE REDE DE AGUA POTAVEL.",
    texto: "Instalação de bomba pressurizadora de rede de agua potavel em uma residência com baixa pressão de agua.",
  },
  {
    img: aguaEsgoto,
    alt: "Canos de agua e esgoto no rodape da parede entrando para o chão de um wc",
    titulo: "INSTALAÇÃO DE RALO E PONTO DE AGUA.",
    texto: "Instalação de um ralo e ponto de agua para torneira no wc.",
  },
  {
    img: calha,
    alt: "Uma escada ancorada na parede com uma tubulação a esquerda conectando na calha",
    titulo: "INSTALAÇÃO DE TUBULAÇÃO NA CALHA.",
    texto: "Feito a instalação de uma tubulação na calha do telhado.",
  },
  {
    img: tubulacaoRegistrosOne,
    alt: "uma parede com reboco e recortada com tubulação de agua passando e saindo os registros de dentro",
    titulo: "SERVIÇOS DE INSTALAÇÃO DE REGISTROS PARA AS VALVULAS DO WC.",
    texto: "Foram instalado registros de agua para um wc em uma residência.",
  },
  {
    img: tubulacaoRegistrosTwo,
    alt: "uma parede com reboco saindo os registros de dentro",
    titulo: "SERVIÇOS DE INSTALAÇÃO DE REGISTROS PARA AS VALVULAS DO WC.",
    texto: "Serviço de instalação de registros já concluído com reboco fechando a parede.",
  },  
  {
    img: raloGaragemOne,
    alt: "O chão da garagem com um buraco e dentro do buraco um cano com um ralo.",
    titulo: "SERVIÇO DE INSTALAÇÃO DE RALO EM UMA GARAGEM.",
    texto: "Instalação de ralo em um garagem residêncial.",
  },
  {
    img: raloGaragemTwo,
    alt: "O chão da garagem com um buraco e dentro do buraco um cano com um ralo.",
    titulo: "SERVIÇO DE INSTALAÇÃO DE RALO EM UMA GARAGEM.",
    texto: "Continuação da instalação de um ralo dentro da garagem.",
  },
  {
    img: trocaTubulacao,
    alt: "Cinco tubulações brancas de esgoto subindo em uma parede.",
    titulo: "REPARO EM TUBULAÇÃO DE ESGOTO DO SHAFT DE UM PRÉDIO",
    texto: "Feito reparo entre as tubulaçoes de esgoto e suspiro do shaft de um prédio residêncial.",
  },
  {
    img: trocaTubulacaoCaixa,
    alt: "Tubulação de esgoto entrando dentro da caixa de esgoto residêncial.",
    titulo: "MANUTENÇÃO EM UMA CAIXA DE ESGOTO.",
    texto: "Foi feito a troca de tubulção de uma caixa de esgoto.",
  },
  {
    img: trocaTubulacaoCozinhaOne,
    alt: "Uma casa com o chão rasgado passando canos de esgotos com duas saidas do tubo para cima.",
    titulo: "SERVIÇO DE INSTALAÇÃO DE ENCANAMENTO DA COZINHA.",
    texto: "Foi instalado encanamento da cozinha em uma obra residêncial.",
  },
  {
    img: trocaTubulacaoCozinhaTwo,
    alt: "Uma casa com o chão rasgado passando canos de esgotos com duas saidas do tubo para cima.",
    titulo: "SERVIÇO DE INSTALAÇÃO DE ENCANAMENTO DA COZINHA.",
    texto: "Continuação do encanamento da cozinha em uma obra residêncial.",
  },
  {
    img: tubulacaoTorneiras,
    alt: "Parede com azulejos marrom estilo tijolinho de barro, com abertura para tubulação de agua, ",
    titulo: "SERVIÇO DE REPARO EM TUBULAÇÃO DAS TORNEIRAS DO BEBEDOR.",
    texto: "Feito modificação de uma tubulação de agua para instalação de duas torneiras em uma escola.",
  },
];

export const servicos: IObjetoImagens[] = [
  {
    img: imgTorneira,
    alt: "imagem de uma torneira sendo instalada",
    texto: "Trabalhamos com diversos tipos de torneiras, cozinha, cubas, Lavabo, aréa de Gourmet e torneiras inteligentes, "
  },
  {
    img: imgSifao,
    alt: "imagem de um sifão sendo instalada",
    texto: "Trabalhamos com troca e reparos em diversos tipos de sifões."
  },
  {
    img: imgFlexivel,
    alt: "imagem de um flexivel sendo instalada",
    texto: "Fazemos trocas, reparos e instalação em diversos tipos de flexiveis."
  },
  {
    img: imgBomba,
    alt: "imagem de uma bomba instalada",
    texto: "instalamos diversos tipos de bombas para esgotos e recalques"
  },
  {
    img: imgPressurizada,
    alt: "imagem de uma bomba pressirizadora instalada",
    texto: "Trabalhamos com instalação de sistema de pressurização de agua potável.",
  },
  {
    img: imgCaixaGordura,
    alt: "imagem de uma caixa de gordura sendo instalada",
    texto: "Trabalhamos com instalação e reparos em caixas de gordura e esgoto.",
  },
];

export const carrossel: IObjetoImagens[] = [
  {
    img: imagemTwo,
    alt: "Imagem de um rapaz segurando as maletas de ferramentas na duas mão de pé com o banner na parede de fundo escrito NL_NEVES",
  },
  {
    img: imagemThree,
    alt: "Imagem de um rapaz com o banner na parede de fundo escrito NL_NEVES e maletas de ferramentas na frente com panfletos e cartões dentro de outras maletas.",
  },
  {
    img: imagemFour,
    alt: "Imagem de um rapaz com o banner na parede de fundo escrito NL_NEVES e maletas de ferramentas por tras com cartões na mão.",
  },
  {
    img: imagemFerramentas,
    alt: "Imagem de diversas maletas de ferramentas no chão.",
  },
];

export const redesSociais: IObjetoImagens[] = [
  {
    alt: "imagem da rede social instagram",
    img: imgInstagram,
    path: "https://www.instagram.com/nelinholedoneves",
  },
  {
    alt: "imagem da rede social facebook",
    img: imgFacebook,
    path: "https://web.facebook.com/profile.php?id=100091657550071",
  },
  {
    alt: "imagem da rede social tiktok",
    img: imgTiktok,
    path: "https://www.tiktok.com/@nl.neves",
  },
  {
    alt: "imagem da rede social youtube",
    img: imgYoutube,
    path: "https://youtube.com/@nelinho-xc2lr?si=doTZkSQqK3L_mY0S",
  },
];
