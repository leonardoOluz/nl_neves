import styled from "styled-components";
import { componetes } from "../../styles/componente";
import { estilosTipografia } from "../../styles/estilosTipografia";

type IkeyComponente = keyof typeof componetes

type IkeyVariante = keyof typeof estilosTipografia
interface PropsTipografia {
  texto: string;
  componente: IkeyComponente;
  variante: IkeyVariante;
}

export const Tipografia = ({ texto, componente, variante }: PropsTipografia) => {
  const tag = componetes[componente];
  const Componente = styled(tag)`
    ${estilosTipografia[variante]}
  `;
  return (<Componente>{texto}</Componente>)
}