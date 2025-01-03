import styled from "styled-components"

const ContainerSuspensoEstilizado = styled.div`
  position: fixed;
  top: 291px;
  left: 0;
  right: 0;
  bottom: 0;
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