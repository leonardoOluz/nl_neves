import styled from "styled-components";
import { Tipografia } from "../Tipografia/Tipografia";
import { SvgLogoNeves } from "../LogoNLNeves/SvgLogoNeves";

const RodapeEstilizado = styled.footer`

  display: flex;
  text-align: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.cores.primaria};

  @media screen and (min-width: 660px){
    flex-direction: row;
    justify-content: end;
    height: 10rem;
  }

`;

const DivRodape = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: ${({ theme }) => theme.espacamentos.l};
  
  @media screen and (min-width: 660px){
    flex:1;
    padding: 0;
  }
`;


const Rodape = () => {
  return (<RodapeEstilizado>
    <DivRodape>
      <Tipografia componente="body" variante="body" texto="Comercial: (11) 97706-6344" />
      <Tipografia componente="body" variante="body" texto="Residencial: (17) 98200-6345" />
    </DivRodape>
    <SvgLogoNeves typeLogo="rodape" />
  </RodapeEstilizado>)
};

export default Rodape;