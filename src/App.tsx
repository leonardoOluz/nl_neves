import { BotaoTop } from "./componentes/BotaoTop/BotaoTop";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { EstiloGlobal } from "./componentes/EstiloGlobal/EstiloGlobal"
import { Main } from "./componentes/Main/Main";
import { ProviderTema } from "./componentes/ProviderTema/ProviderTema"
import { Carrosel } from "./Pages/Carrossel/Carrossel";
import { Contato } from "./Pages/Contato/Contato";
import { Galeria } from "./Pages/Galeria/Galeria";
import { Servicos } from "./Pages/Servicos/Servicos";
import { SobreEmpresa } from "./Pages/SobreEmpresa/SobreEmpresa";

function App() {
  return (<ProviderTema>
    <EstiloGlobal />
    <Cabecalho />
    <Main>
      <Carrosel />
      <SobreEmpresa />
      <Servicos />
      <Galeria />
      <Contato />
    </Main>
    <BotaoTop/>
  </ProviderTema>)
}

export default App;