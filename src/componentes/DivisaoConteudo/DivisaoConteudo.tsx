import styled, { css } from "styled-components"

const divContato = css`
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.espacamentos.xs};
  gap: 0;

  @media screen and (min-width: 660px){
    padding: ${({ theme }) => theme.espacamentos.l};
  }
`;

const divTipografia = css`
 justify-content: flex-start;
 padding: ${({ theme }) => theme.espacamentos.m};
 
 @media screen and (min-width: 660px){
   width: 70rem;  
   flex-direction: column;
  }
  `

const divGaleria = css`
  padding: ${({ theme }) => theme.espacamentos.xl};
  box-sizing: border-box;
`;

const DivisaoEstilizada = styled.div<{ $divisao?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.espacamentos.l};

  ${({ $divisao }) => {
    switch ($divisao) {
      case "divTipografia":
        return divTipografia;
      case "divContato":
        return divContato;
      case "divGaleria":
        return divGaleria;
      default:
        break;
    }
  }}
`;

interface PropsContainerDivisao {
  children: React.ReactNode;
  divTipografia?: "divTipografia" | "divContato" | "divGaleria";
}

export const DivisaoConteudo = ({ children, divTipografia }: PropsContainerDivisao) => {
  return (<DivisaoEstilizada $divisao={divTipografia}>{children}</DivisaoEstilizada>)
};