import styled, { css } from "styled-components"

const divContato = css`
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0;
`;

const divTipografia = css`
 justify-content: flex-start;
 padding: ${({ theme }) => theme.espacamentos.m};

@media screen and (min-width: 660px){
  width: 70rem;  
  flex-direction: column;
}
`

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
      default:
        break;
    }
  }}
`;

interface PropsContainerDivisao {
  children: React.ReactNode;
  divTipografia?: "divTipografia" | "divContato";
}

export const DivisaoConteudo = ({ children, divTipografia }: PropsContainerDivisao) => {
  return (<DivisaoEstilizada $divisao={divTipografia}>{children}</DivisaoEstilizada>)
};