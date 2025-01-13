import { Tipografia } from "../../componentes/Tipografia/Tipografia"

export const NotFound = () => {
  return (<div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "black",
    }}>
    <Tipografia componente="h1" variante="h2" texto="Erro 404, Página não encontrada" />
  </div>)
}