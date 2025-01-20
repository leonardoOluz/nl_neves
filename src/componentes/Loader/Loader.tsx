import styled from "styled-components"
import { keyframes } from "styled-components"

const l21 = keyframes`
  50% { box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
  100% { box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px}
`;

const LoaderEstilizado = styled.div`
    color: #000;
    width: 4px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
    transform: translateX(-38px);
    animation: ${l21} .5s infinite alternate linear;    
`;

const Loader = () => {
  return (<LoaderEstilizado></LoaderEstilizado>)
};

export default Loader;