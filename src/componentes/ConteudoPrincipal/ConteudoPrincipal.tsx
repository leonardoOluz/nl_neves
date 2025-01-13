import { Outlet } from "react-router-dom"
import { Cabecalho } from "../Cabecalho/Cabecalho"
import { Main } from "../Main/Main"

export const ConteudoPrincipal = () => {
  return (<>
    <Cabecalho />
    <Main>
      <Outlet />
    </Main>
  </>)
}