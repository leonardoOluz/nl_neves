import styled, { css } from "styled-components"

const NavegacaoSuspensaEstilizada = css<{ $isopen?: boolean }>`
  position: absolute;
  top: 96px;
  left: 0 ;
  right: 0;
  z-index: 0;

  ${({ $isopen }) => {    
    return $isopen
      ? ("transition: transform 1.2s ease-in-out; transform: translateY(0);")
      : ("transform: translateY(-150%);");
  }}

  `;

const NavegacaoEstilizada = css`
  width: 25%;
  text-align: center;
  @media screen and (min-width: 660px){
    width: 50%;
  }
`;

const NavegacaoStyled = styled.nav<{ $isSuspenso?: boolean, $isopen?: boolean }>`
  box-sizing: border-box;
  ${({ $isSuspenso }) => $isSuspenso ? NavegacaoSuspensaEstilizada : NavegacaoEstilizada}
`;

interface PropsNavegacao {
  children: React.ReactNode;
  isSuspenso?: boolean;
  isOpen?: boolean;
}

export const Navegacao = ({ children, isSuspenso, isOpen }: PropsNavegacao) => {
  return (<NavegacaoStyled $isSuspenso={isSuspenso} $isopen={isOpen}>{children}</NavegacaoStyled>)
}