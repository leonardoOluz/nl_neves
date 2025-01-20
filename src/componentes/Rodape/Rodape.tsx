import styled from "styled-components";
import { Tipografia } from "../Tipografia/Tipografia";

const RodapeEstilizado = styled.footer`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cores.primaria};

  @media screen and (min-width: 660px){
    padding: 2rem 0;
  }

`;

const DivRodape = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: ${({ theme }) => theme.espacamentos.l};
  
  @media screen and (min-width: 660px){
    padding: 0;
    align-items: center;
  }
`;


const Rodape = () => {
  return (<RodapeEstilizado>
    <DivRodape>
      <Tipografia componente="body" variante="body" texto="Contatos: (11) 97706-6344  (17) 98200-6345" />
    </DivRodape>
  </RodapeEstilizado>)
};

export default Rodape;