import styled from "styled-components"

const ContainerEstilizado = styled.div`
  width: 45rem;
  padding: ${({ theme }) => theme.espacamentos.m};
  background-color: ${({ theme }) => theme.cores.terciario};
  box-sizing: border-box;
  
  @media screen and (min-width: 660px){
    width: 35rem;
  }
`;

interface PropsContainer {
  children: React.ReactNode
}

export const Container = ({ children }: PropsContainer) => {
  return (<ContainerEstilizado>{children}</ContainerEstilizado>)
}