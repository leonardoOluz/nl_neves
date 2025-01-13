import styled from "styled-components"

const ItemEstilizado = styled.li`
`;

interface PropsItenLista {
  children: React.ReactNode
}
export const ItemLista = ({ children }: PropsItenLista) => {
  return (<ItemEstilizado>{children}</ItemEstilizado>)
}