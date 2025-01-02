import { Cabecalho } from "./componentes/Cabecalho/Cabecalho"
import { EstiloGlobal } from "./componentes/EstiloGlobal/EstiloGlobal"
import { ProviderTema } from "./componentes/ProviderTema/ProviderTema"

function App() {
  return (<ProviderTema>
    <EstiloGlobal />
    <Cabecalho />
  </ProviderTema>)
}

export default App