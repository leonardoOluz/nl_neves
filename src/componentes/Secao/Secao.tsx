import styled, { css } from "styled-components";


const SectionFinal = css`
  border: none;
  box-shadow: none;
  text-align: center;
`;

const SecaoEstilizada = styled.section<{ $secao?: boolean }>`
  color: ${({ theme }) => theme.cores.primaria};
  margin:${({ theme }) => theme.espacamentos.xl} 0;
    ${({ $secao }) => $secao && SectionFinal}
`;

interface PropsSecao {
  children: React.ReactNode;
  secao?: boolean;
  id: string;
  ariaLabel: string;
}

export const Secao = ({ children, id, secao = false, ariaLabel }: PropsSecao) => {
  return (<SecaoEstilizada id={id} $secao={secao} aria-label={ariaLabel}>{children}</SecaoEstilizada>)
}