import styled from "styled-components"

const ContainerSuspensoEstilizado = styled.div`
  position: fixed;
  top: 267px;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 0;
`;

interface PropsContainerSuspenso {
  handleClick: () => void;
}

export const ContainerSuspenso = ({handleClick}:PropsContainerSuspenso) => {
  return (<ContainerSuspensoEstilizado
    onClick={handleClick}>
  </ContainerSuspensoEstilizado>)
} 